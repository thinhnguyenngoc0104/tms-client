import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from "react";

const Dashboard = () => {
  const { logout, user } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: "https://token-generator-gamma.vercel.app" });
  };


  const accessToken = localStorage.getItem("accessToken");
  const idToken = localStorage.getItem("idToken");

  const [copied, setCopied] = useState("");

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(`${label} copied!`);
      setTimeout(() => setCopied(""), 2000);
    });
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      gap: '20px'
    }}>
      <h1>Hello!</h1>
      {user && (
        <div style={{ textAlign: 'center' }}>
          <p>Welcome, {user.name || user.email}!</p>
          <div style={{ padding: "20px" }}>
            <p onClick={() => handleCopy(accessToken, "Access Token")} style={{ cursor: "pointer" }}>
              <b>Access Token:</b> <br /> {accessToken}
            </p>
            <br />
            <p onClick={() => handleCopy(idToken, "ID Token")} style={{ cursor: "pointer" }}>
              <b>ID Token:</b> {idToken}
            </p>
            {copied && <p style={{ color: "green" }}>{copied}</p>}
          </div>
        </div>
      )}
      <button
        onClick={handleLogout}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
