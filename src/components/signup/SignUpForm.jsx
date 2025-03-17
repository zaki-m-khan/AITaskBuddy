"use client";
import React, { useState } from "react";

function SignUpForm({ onSignup, onNavigateToLogin }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would create an account here
    onSignup();
  };

  return (
    <section className="p-8 bg-white rounded-2xl shadow-[0_8px_10px_rgba(0,0,0,0.1),0_20px_25px_rgba(0,0,0,0.1)] max-sm:p-6">
      <header className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-indigo-900">Create Account</h2>
        <p className="mt-2 text-base text-gray-600">Join AI Task Buddy today</p>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="fullName" className="mb-2 text-lg text-gray-700">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            className="p-4 w-full text-base rounded-lg border-2 border-indigo-100 border-solid"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="mb-2 text-lg text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="p-4 w-full text-base rounded-lg border-2 border-indigo-100 border-solid"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="mb-2 text-lg text-gray-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Create a password"
            className="p-4 w-full text-base rounded-lg border-2 border-indigo-100 border-solid"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="p-4 mb-6 w-full text-lg text-white bg-indigo-600 rounded-lg cursor-pointer border-[none] hover:bg-indigo-700 transition-colors"
        >
          Sign Up
        </button>

        <p className="text-base text-center text-gray-600">
          <span>Already have an account? </span>
          <a 
            href="#" 
            className="text-indigo-600 no-underline hover:underline"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToLogin();
            }}
          >
            Log in
          </a>
        </p>
      </form>
    </section>
  );
}

export default SignUpForm;
