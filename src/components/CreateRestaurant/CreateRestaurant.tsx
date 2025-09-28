import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateRestaurant.css";
import SideBar from "../SideBar/SideBar";

interface Restaurant {
  id: string;
  name: string;
  address: string;
  logo: string;
  isOpen: boolean;
  foodItems: any[]; // Replace 'any' with your actual FoodItem type if available
}

interface RestaurantFormProps {
  restaurant?: Restaurant;
  onSubmit?: (restaurant: Omit<Restaurant, "id" | "foodItems">) => void;
  onCancel?: () => void;
}

const RestaurantForm: React.FC<RestaurantFormProps> = ({
  restaurant,
  onSubmit,
  onCancel,
}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<{
    name: string;
    address: string;
    logo: string;
    isOpen: boolean;
    image?: string;
    imageFile?: File;
  }>({
    name: "",
    address: "",
    logo: "",
    isOpen: true,
    image: undefined,
    imageFile: undefined,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (restaurant) {
      setFormData({
        name: restaurant.name,
        address: restaurant.address,
        logo: restaurant.logo,
        isOpen: restaurant.isOpen,
      });
    }
  }, [restaurant]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Restaurant name is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.logo.trim()) newErrors.logo = "Logo URL is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      if (onSubmit) {
        onSubmit(formData);
      } else {
        // Default behavior - you can customize this
        console.log("Restaurant data:", formData);
        // Maybe save to localStorage, make API call, etc.
        alert("Restaurant created successfully!");
        navigate("/"); // Navigate back to home page
      }
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      // Default behavior - navigate back
      navigate("/");
    }
  };

  return (
    <div className="restaurant-form-overlay">
        <div className="sb"><SideBar /></div>
      <form className="restaurant-form" onSubmit={handleSubmit}>
        <h2>{restaurant ? "Edit Restaurant" : "Add New Restaurant"}</h2>

        <div className="form-group">
          <label>Restaurant Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={errors.name ? "error" : ""}
            placeholder="Enter restaurant name"
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className={errors.address ? "error" : ""}
            placeholder="Enter full address"
          />
          {errors.address && (
            <span className="error-text">{errors.address}</span>
          )}
        </div>

         <div className="form-group">
           <label>logo</label>
<input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const files = e.target.files;
    const file = files && files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result as string, imageFile: file });
      };
      reader.readAsDataURL(file);
    }
  }}
  className={errors.image ? "error" : ""}
/>

{formData.imageFile && (
  <div className="image-preview">
    <img
      src={URL.createObjectURL(formData.imageFile)}
      alt="Preview"
      style={{ width: "150px", marginTop: "10px" }}
    />
  </div>
)}

  {errors.image && <span className="error-text">{errors.image}</span>}
</div>
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={formData.isOpen}
              onChange={(e) =>
                setFormData({ ...formData, isOpen: e.target.checked })
              }
            />
            <span className="checkbox-text">Currently Open</span>
          </label>
        </div>

        <div className="form-actions">
          <button type="button" onClick={handleCancel} className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="submit-btn">
            {restaurant ? "Update" : "Add"} Restaurant
          </button>
        </div>
      </form>
    </div>
  );
};

export default RestaurantForm;
