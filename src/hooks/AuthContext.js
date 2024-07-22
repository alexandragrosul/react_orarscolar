// AuthContext.js
import { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyBZdc0e79OVDPCLVRTqnm1g8mrvcxsSs80",
    authDomain: "escoala-7b63b.firebaseapp.com",
    databaseURL:
      "https://escoala-7b63b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "escoala-7b63b",
    storageBucket: "escoala-7b63b.appspot.com",
    messagingSenderId: "559332945951",
    appId: "1:559332945951:web:8e383bea8c70516b24652a",
    measurementId: "G-FMNJ6RSP5H",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //   const analytics = getAnalytics(app);

  const auth = getAuth(app);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
