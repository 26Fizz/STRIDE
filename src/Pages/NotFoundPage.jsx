// src/pages/NotFoundPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-green-500 rounded-lg text-black font-semibold hover:bg-green-600 transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFoundPage;
