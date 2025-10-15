import React, { useState } from "react";
import { createPortal } from "react-dom";

const AdminLogin = ({ isOpen, onClose, onSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const BASE_URL = "https://myflix-drnx.onrender.com"

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  console.log("Response:", data);

  if (response.ok) {
    localStorage.setItem("token", data.token); // ✅ store JWT locally
    alert("Login successful!");
    onSuccess()
  } else {
    alert(data.message);
  }
};


  return createPortal(
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-transparent rounded-lg p-8 w-full max-w-lg relative">
        <h2 className="text-2xl font-bold mb-4 text-white">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border text-white border-gray-500 bg-gray-800 p-2 w-full rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border text-white border-gray-500 bg-gray-800 p-2 w-full rounded"
          />
          <div className="flex justify-center gap-2">
            <button
              type="submit"
              className="bg-[#E50914] text-white px-3 py-1 rounded"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-3 py-1 rounded"
            >
              Cancel
            </button>
            
          </div>
        </form>
      </div>
    </div>,
    document.body // 👈 this makes it render above everything
  );
};

export default AdminLogin;
