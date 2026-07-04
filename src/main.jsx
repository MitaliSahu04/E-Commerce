import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./index.css";
import App from "./App.jsx";
import UserProvider from "./context/CreateUserContext.jsx";

const root = createRoot(document.getElementById("root"));

const initializeApp = async () => {
  try {
    // Call your authentication 
    const payload ={
      username:"admin",
      password:"Admin@123",
      apiKey:"ABC123XYZ"
    }
    const response = await axios.post( "http://localhost:3000/auth/loginauth", payload);

    // Save token
    localStorage.setItem("token", response.data.token);

    console.log("", response.data.token);
  } catch (error) {
    console.error("Authentication Failed:", error);

    // You can stop rendering here if authentication is mandatory
    // return;
  }

  // Render the app only after authentication completes
  root.render(
    <StrictMode>
      <UserProvider>
        <App />
      </UserProvider>
    </StrictMode>
  );
};

initializeApp();