import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { store } from './store';
import { getStoredToken } from './services/auth';
import { spotifyApi } from './services/spotifyApi';

import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import PlayerBar from './components/layout/PlayerBar';
import Home from './pages/Home';
import Search from './pages/Search';
import Playlist from './pages/Playlist';
import Login from './pages/Login';
import Callback from './pages/Callback';
import './styles/globals.css';

const AppContent: React.FC = () => {
  const [isAuthenticatedState, setIsAuthenticatedState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = getStoredToken();
      if (token) {
        spotifyApi.setAccessToken(token);
        setIsAuthenticatedState(true);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="callback-page">
        <div className="callback-container">
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  if (!isAuthenticatedState) {
    return (
      <Router>
        <Routes>
          <Route path="/callback" element={<Callback />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <div id="root">
        <div className="app-container">
          <Sidebar />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/playlist/:id" element={<Playlist />} />
              <Route path="/library" element={<Home />} />
              <Route path="/liked" element={<Playlist />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </MainContent>
        </div>
        <PlayerBar />
      </div>
    </Router>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;