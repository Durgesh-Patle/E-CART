import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Add your login logic here (e.g., API call)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            {/* <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label> */}
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-gray-50 border rounded-md focus:outline-none "
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password */}
          <div className="mb-4">
            {/* <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label> */}
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-gray-50 border rounded-md focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        {/* Links */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
        <p className="text-center text-sm text-gray-600 mt-2">
          <a href="/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
