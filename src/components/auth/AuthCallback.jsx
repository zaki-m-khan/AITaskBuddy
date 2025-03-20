import React, { useEffect } from "react";
import { useMsal } from "@azure/msal-react";

function AuthCallback() {
  const { instance } = useMsal();

  useEffect(() => {
    // Handle the redirect response
    instance.handleRedirectPromise().then(() => {
      // Redirect to the main app
      window.location.href = "/";
    }).catch(error => {
      console.error("Authentication failed:", error);
    });
  }, [instance]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Completing authentication...</h2>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 mx-auto"></div>
      </div>
    </div>
  );
}

export default AuthCallback; 