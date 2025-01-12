import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Data Submitted: ", formData);
    // Add your submission logic here (e.g., API call)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {/* <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label> */}
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-gray-50 border rounded-md focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>
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
              className="w-full mt-1 px-4 py-2 bg-gray-50 border rounded-md focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
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
              className="w-full mt-1 px-4 py-2 bg-gray-50 border rounded-md focus:outline-none "
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6">
            {/* <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-600"
            >
              Confirm Password
            </label> */}
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-gray-50 border rounded-md focus:outline-none"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 focus:outline-none "
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
