import React from 'react';
import { getAuthUrl } from '../services/auth';

const Login: React.FC = () => {
  const handleLogin = () => {
    window.location.href = getAuthUrl();
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-content">
          <div className="logo-section">
            <svg width="131" height="40" viewBox="0 0 131 40" fill="none">
              <path
                d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm9.144 28.88a1.25 1.25 0 01-1.72.416c-4.71-2.88-10.64-3.536-17.624-1.936a1.25 1.25 0 11-.528-2.44c7.616-1.744 14.336-.896 19.456 2.24a1.25 1.25 0 01.416 1.72zm2.456-5.472a1.563 1.563 0 01-2.144.512c-5.392-3.312-13.584-4.272-19.968-2.336a1.563 1.563 0 11-.896-2.992c7.328-2.208 16.32-1.136 22.496 2.672a1.563 1.563 0 01.512 2.144zm.208-5.696C26.352 14.4 15.328 14.016 8.928 15.936a1.875 1.875 0 11-1.056-3.584c7.36-2.208 19.456-1.792 26.016 2.016a1.875 1.875 0 11-1.856 3.264l-.224-.016z"
                fill="white"
              />
              <path
                d="M53.44 15.2h4.16v17.68h-4.16V15.2zm6.72 0h4.16v17.68h-4.16V15.2zm8.32 8.88c0-5.52 3.84-9.36 9.28-9.36 5.44 0 9.28 3.84 9.28 9.36 0 5.52-3.84 9.36-9.28 9.36-5.44 0-9.28-3.84-9.28-9.36zm14.4 0c0-3.12-2.08-5.28-5.12-5.28s-5.12 2.16-5.12 5.28 2.08 5.28 5.12 5.28 5.12-2.16 5.12-5.28zm8.64-8.88h4.16v2.96c1.12-2.08 3.04-3.28 5.84-3.28v4.32c-.48-.08-.96-.12-1.44-.12-3.04 0-4.4 1.84-4.4 5.28v7.92h-4.16V15.2zm14.96 8.88c0-5.52 3.76-9.36 9.04-9.36 5.12 0 8.48 3.52 8.48 8.8v1.36h-13.36c.32 2.56 2.24 4.08 4.96 4.08 1.92 0 3.36-.64 4.32-1.92l2.72 2.4c-1.44 2.08-4 3.2-7.2 3.2-5.36 0-8.96-3.84-8.96-9.36zm13.36-1.36c-.16-2.4-1.92-3.92-4.32-3.92s-4.24 1.52-4.56 3.92h8.88zm11.68-7.52h4.16v2.96c1.12-2.08 3.04-3.28 5.84-3.28v4.32c-.48-.08-.96-.12-1.44-.12-3.04 0-4.4 1.84-4.4 5.28v7.92h-4.16V15.2z"
                fill="white"
              />
            </svg>
          </div>

          <h1 className="login-title">Log in to Spotify</h1>

          <div className="login-form">
            <button className="login-button" onClick={handleLogin}>
              Continue with Spotify
            </button>
          </div>

          <div className="login-footer">
            <p>
              Don't have an account?{' '}
              <a href="https://www.spotify.com/signup" target="_blank" rel="noopener noreferrer">
                Sign up for Spotify
              </a>
            </p>
          </div>
        </div>

        <div className="login-background">
          <div className="gradient-bg"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;