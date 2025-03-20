import React, { useState } from "react";

function EmployeeLoginForm({ onEmailLogin, onGoogleLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }
    
    try {
      await onEmailLogin(formData.email, formData.password);
    } catch (error) {
      setError("Invalid email or password");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white p-10 rounded-2xl shadow-lg">
      <form className="flex flex-col gap-7" onSubmit={handleEmailLogin}>
        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg text-gray-700">
            Work Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your work email"
            className="px-4 h-14 text-lg rounded-lg border-2 border-indigo-100 focus:border-indigo-500 focus:outline-none"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <label htmlFor="password" className="text-lg text-gray-700">
              Password
            </label>
            <a href="#" className="text-indigo-600 hover:text-indigo-800">
              Forgot password?
            </a>
          </div>
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
          className="text-xl text-white bg-indigo-600 rounded-lg h-[56px] hover:bg-indigo-700 transition-colors font-medium"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
      
      <button
        onClick={onGoogleLogin}
        className="flex justify-center items-center gap-2 px-4 py-3 mt-4 w-full text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.8055 10.2275C19.8055 9.51 19.7485 8.7925 19.6345 8.1035H10.2V11.8885H15.6245C15.3855 13.0935 14.6875 14.1285 13.6395 14.8155V17.2515H16.8185C18.7035 15.5455 19.8055 13.1115 19.8055 10.2275Z" fill="#4285F4"/>
          <path d="M10.2 20C12.9 20 15.17 19.115 16.819 17.2515L13.64 14.8155C12.7515 15.415 11.5785 15.7805 10.2 15.7805C7.572 15.7805 5.343 14.0485 4.5235 11.7H1.2395V14.2115C2.8775 17.5925 6.3095 20 10.2 20Z" fill="#34A853"/>
          <path d="M4.5235 11.7C4.3235 11.1 4.2095 10.46 4.2095 9.8C4.2095 9.14 4.3235 8.5 4.5235 7.9V5.3885H1.2395C0.5525 6.6885 0.1665 8.1975 0.1665 9.8C0.1665 11.4025 0.5525 12.9115 1.2395 14.2115L4.5235 11.7Z" fill="#FBBC05"/>
          <path d="M10.2 3.8195C11.681 3.8195 13.0045 4.3355 14.0355 5.3095L16.8575 2.5445C15.1645 0.9695 12.8945 0 10.2 0C6.3095 0 2.8775 2.4075 1.2395 5.7885L4.5235 8.3C5.343 5.9515 7.572 3.8195 10.2 3.8195Z" fill="#EA4335"/>
        </svg>
        <span>Sign in with Google</span>
      </button>
      
      <div className="mt-6 text-center text-gray-600">
        <p>Need help? Contact your manager or IT support</p>
      </div>
    </section>
  );
}

export default EmployeeLoginForm; 