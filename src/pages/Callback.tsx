import React, { useEffect } from 'react';
import { getTokenFromUrl } from '../services/auth';

const Callback: React.FC = () => {
  useEffect(() => {
    const token = getTokenFromUrl();
    if (token) {
      // Redirect to home page after successful authentication
      window.location.href = '/';
    } else {
      // Redirect to login if no token found
      window.location.href = '/login';
    }
  }, []);

  return (
    <div className="callback-page">
      <div className="callback-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
        <h2>Connecting to Spotify...</h2>
        <p>Please wait while we authenticate your account.</p>
      </div>
    </div>
  );
};

export default Callback;