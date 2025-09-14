// src/api/api.ts
export interface RegisterData {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  PhoneNumber: string;
  ConfirmPassword: string;
}

export interface LoginData {
    PhoneOrEmail: string;
  Password: string;
}

interface ApiResponse<T> {
  data?: T;
  message?: string;
}

const API_BASE_URL = "http://localhost:4000/v1/api";

const handleResponse = async <T>(response: Response): Promise<T> => {
  try {
    const data = await response.json();
   if (!response.ok) {
      throw new Error(data.message || "Request failed");
    }
     return data as T;
  } catch {
    throw new Error("Invalid server response");
  } 
};

export const register = async (data: RegisterData): Promise<ApiResponse<{ message: string }>> => {
    const url = `${API_BASE_URL}/auth/register`;
     console.log("👉 Register URL (debug):", JSON.stringify(url));
  console.log("👉 Data (debug):", data);

  // Transform the data to match backend expectations
  const backendData = {
    name: `${data.FirstName} ${data.LastName}`, // Combine first and last name
    email: data.Email,
    password: data.Password,
    phone_number: data.PhoneNumber,
    address: "", // You might want to add an address field to your form or set a default
  };

  console.log("👉 Backend Data (debug):", backendData);

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(backendData), // Send transformed data
  });
  return handleResponse<ApiResponse<{ message: string }>>(response);
};

export const login = async (data: LoginData): Promise<ApiResponse<{ token: string }>> => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await handleResponse<ApiResponse<{ token: string }>>(response);

  if (result.data?.token) {
    localStorage.setItem("token", result.data.token);
  }

  return result;
};