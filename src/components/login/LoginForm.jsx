"use client";
import React, { useState } from "react";

function LoginForm({ onLogin, onNavigateToSignup }) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would validate credentials here
    onLogin();
  };

  return (
    <div className="flex flex-col p-8 w-full bg-white rounded-2xl shadow-lg max-w-[584px]">
      <div className="flex flex-col items-center mb-8">
        <h2 className="mb-3 text-2xl font-bold text-indigo-900">
          Welcome Back!
        </h2>
        <p className="text-base text-gray-600">
          Log in to your AI Task Buddy account
        </p>
      </div>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="px-4 h-14 text-lg rounded-lg border-2 border-indigo-100 focus:border-indigo-500 focus:outline-none"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-lg text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="px-4 h-14 text-lg rounded-lg border-2 border-indigo-100 focus:border-indigo-500 focus:outline-none"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="text-lg text-white bg-indigo-600 rounded-lg h-[52px] hover:bg-indigo-700 transition-colors"
        >
          Log In
        </button>
      </form>
      <div className="flex flex-col items-center mt-6">
        <a
          href="#"
          className="mb-3 text-base text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          Forgot your password?
        </a>
        <div className="text-base">
          <span>Don't have account, </span>
          <a
            href="#"
            className="text-indigo-600 underline hover:text-indigo-800 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToSignup();
            }}
          >
            sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
