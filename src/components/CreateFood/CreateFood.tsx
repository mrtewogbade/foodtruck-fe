import React, { useState, useEffect } from "react";
import "./CreateFood.css";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

interface FoodFormProps {
  food?: any;
  onSubmit?: (food: Omit<any, "id">) => void;
  onCancel?: () => void;
}

const createFood: React.FC<FoodFormProps> = ({ food, onSubmit, onCancel }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    restaurantName: "",
    foodName: "",
    foodDescription: "",
    price: "",
    image: "", // stores data URL for submission
    imageFile: null as File | null, // stores File object for preview
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (food) {
      setFormData({
        restaurantName: food.restaurantName,
        foodName: food.foodName,
        foodDescription: food.foodDescription,
        price: food.price.toString(),
        image: food.image,
        imageFile: null, // Reset or set to null when loading existing food
      });
    }
  }, [food]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.restaurantName.trim())
      newErrors.restaurantName = "Restaurant name is required";
    if (!formData.foodName.trim()) newErrors.foodName = "Food name is required";
    if (!formData.foodDescription.trim())
      newErrors.foodDescription = "Description is required";
    if (
      !formData.price ||
      isNaN(Number(formData.price)) ||
      Number(formData.price) <= 0
    ) {
      newErrors.price = "Valid price is required";
    }
    if (!formData.image.trim()) newErrors.image = "Image URL is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const foodData = {
        restaurantName: formData.restaurantName,
        foodName: formData.foodName,
        foodDescription: formData.foodDescription,
        price: Number(formData.price),
        image: formData.image,
      };

      if (onSubmit) {
        onSubmit(foodData);
      } else {
        // Default behavior - you can customize this
        console.log("Food data:", foodData);
        // Maybe save to localStorage, make API call, etc.
        alert("Food item created successfully!");
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
    
    <div className="food-form-overlay">
       <SideBar />
      <form className="food-form" onSubmit={handleSubmit}>
        <h2>{food ? "Edit Food Item" : "Add New Food Item"}</h2>

        <div className="form-group">
          <label>Restaurant Name</label>
          <input
            type="text"
            value={formData.restaurantName}
            onChange={(e) =>
              setFormData({ ...formData, restaurantName: e.target.value })
            }
            className={errors.restaurantName ? "error" : ""}
          />
          {errors.restaurantName && (
            <span className="error-text">{errors.restaurantName}</span>
          )}
        </div>

        <div className="form-group">
          <label>Food Name</label>
          <input
            type="text"
            value={formData.foodName}
            onChange={(e) =>
              setFormData({ ...formData, foodName: e.target.value })
            }
            className={errors.foodName ? "error" : ""}
          />
          {errors.foodName && (
            <span className="error-text">{errors.foodName}</span>
          )}
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={formData.foodDescription}
            onChange={(e) =>
              setFormData({ ...formData, foodDescription: e.target.value })
            }
            className={errors.foodDescription ? "error" : ""}
            rows={3}
          />
          {errors.foodDescription && (
            <span className="error-text">{errors.foodDescription}</span>
          )}
        </div>

        <div className="form-group">
          <label>Price ($)</label>
          <input
            type="number"
            step="0.01"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            className={errors.price ? "error" : ""}
          />
          {errors.price && <span className="error-text">{errors.price}</span>}
        </div>

       <div className="form-group">
         <label>Logo</label>
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


        <div className="form-actions">
          <button type="button" onClick={handleCancel} className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="submit-btn">
            {food ? "Update" : "Add"} Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default createFood;
