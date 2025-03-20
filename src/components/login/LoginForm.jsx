"use client";
import React, { useState } from "react";

function LoginForm({ onEmailLogin, onGoogleLogin, onNavigateToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    if (!email || !password) {
      setError("Please enter both email and password");
      setLoading(false);
      return;
    }
    
    try {
      await onEmailLogin(email, password);
      // If we get here, login was successful
    } catch (error) {
      console.error("Login error:", error);
      setError(`Failed to sign in: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white p-10 rounded-2xl shadow-lg">
      <div className="mb-8">
        <h2 className="mb-2 text-3xl font-bold text-gray-900">Sign In</h2>
        <p className="text-lg text-gray-600">
          Welcome back! Please sign in to continue.
        </p>
      </div>
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}
      <form className="flex flex-col gap-7" onSubmit={handleEmailLogin}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="px-4 h-14 text-lg rounded-lg border-2 border-indigo-100 focus:border-indigo-500 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-xl text-white bg-indigo-600 rounded-lg h-[56px] hover:bg-indigo-700 transition-colors font-medium"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
      <button
        onClick={onGoogleLogin}
        className="flex justify-center items-center gap-2 px-4 py-3 mb-4 w-full text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:bg-gray-100"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.8055 10.2275C19.8055 9.51 19.7485 8.7925 19.6345 8.1035H10.2V11.8885H15.6245C15.3855 13.0935 14.6875 14.1285 13.6395 14.8155V17.2515H16.8185C18.7035 15.5455 19.8055 13.1115 19.8055 10.2275Z" fill="#4285F4"/>
          <path d="M10.2 20C12.9 20 15.17 19.115 16.819 17.2515L13.64 14.8155C12.7515 15.415 11.5785 15.7805 10.2 15.7805C7.572 15.7805 5.343 14.0485 4.5235 11.7H1.2395V14.2115C2.8775 17.5925 6.3095 20 10.2 20Z" fill="#34A853"/>
          <path d="M4.5235 11.7C4.3235 11.1 4.2095 10.46 4.2095 9.8C4.2095 9.14 4.3235 8.5 4.5235 7.9V5.3885H1.2395C0.5525 6.6885 0.1665 8.1975 0.1665 9.8C0.1665 11.4025 0.5525 12.9115 1.2395 14.2115L4.5235 11.7Z" fill="#FBBC05"/>
          <path d="M10.2 3.8195C11.681 3.8195 13.0045 4.3355 14.0355 5.3095L16.8575 2.5445C15.1645 0.9695 12.8945 0 10.2 0C6.3095 0 2.8775 2.4075 1.2395 5.7885L4.5235 8.3C5.343 5.9515 7.572 3.8195 10.2 3.8195Z" fill="#EA4335"/>
        </svg>
        <span>Sign in with Google</span>
      </button>
      <div className="mt-6 text-center">
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
    </section>
  );
}

export default LoginForm;
