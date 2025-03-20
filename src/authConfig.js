export const msalConfig = {
  auth: {
    clientId: "YOUR_CLIENT_ID", // From Azure AD B2C App registration
    authority: "https://YOUR_TENANT_NAME.b2clogin.com/YOUR_TENANT_NAME.onmicrosoft.com/B2C_1_signupsignin", // Your policy
    knownAuthorities: ["YOUR_TENANT_NAME.b2clogin.com"], // Your B2C domain
    redirectUri: "http://localhost:3000/auth", // Must match the registered redirect URI
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  }
};

// Scopes you want to request
export const loginRequest = {
  scopes: ["openid", "profile", "email"]
};

// Optional - Configure additional endpoints for your API
export const apiConfig = {
  scopes: ["https://YOUR_TENANT_NAME.onmicrosoft.com/api/tasks.read"],
  uri: "https://your-api-endpoint.com"
}; 