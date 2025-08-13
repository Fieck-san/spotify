import React from 'react';
import { Play } from 'lucide-react';

const Home: React.FC = () => {
  const recentlyPlayed = [
    { id: 1, title: 'Liked Songs', image: 'https://via.placeholder.com/200x200/1db954/ffffff?text=♥' },
    { id: 2, title: 'Rock Classics', image: 'https://via.placeholder.com/200x200/ff6b6b/ffffff?text=🎸' },
    { id: 3, title: 'Chill Vibes', image: 'https://via.placeholder.com/200x200/4ecdc4/ffffff?text=🌊' },
    { id: 4, title: 'Hip Hop Central', image: 'https://via.placeholder.com/200x200/45b7d1/ffffff?text=🎤' },
    { id: 5, title: 'Indie Mix', image: 'https://via.placeholder.com/200x200/f9ca24/ffffff?text=🎵' },
    { id: 6, title: 'Pop Hits', image: 'https://via.placeholder.com/200x200/e056fd/ffffff?text=⭐' },
  ];

  const madeForYou = [
    { id: 1, title: 'Discover Weekly', subtitle: 'Your weekly mixtape of fresh music', image: 'https://via.placeholder.com/200x200/1db954/ffffff?text=DW' },
    { id: 2, title: 'Daily Mix 1', subtitle: 'Rock, Alternative, and more', image: 'https://via.placeholder.com/200x200/ff6b6b/ffffff?text=DM1' },
    { id: 3, title: 'Daily Mix 2', subtitle: 'Hip Hop, Rap, and more', image: 'https://via.placeholder.com/200x200/4ecdc4/ffffff?text=DM2' },
    { id: 4, title: 'Release Radar', subtitle: 'Catch all the latest music', image: 'https://via.placeholder.com/200x200/45b7d1/ffffff?text=RR' },
  ];

  const topArtists = [
    { id: 1, name: 'The Beatles', image: 'https://via.placeholder.com/200x200/282828/ffffff?text=TB' },
    { id: 2, name: 'Queen', image: 'https://via.placeholder.com/200x200/282828/ffffff?text=Q' },
    { id: 3, name: 'Led Zeppelin', image: 'https://via.placeholder.com/200x200/282828/ffffff?text=LZ' },
    { id: 4, name: 'Pink Floyd', image: 'https://via.placeholder.com/200x200/282828/ffffff?text=PF' },
    { id: 5, name: 'The Rolling Stones', image: 'https://via.placeholder.com/200x200/282828/ffffff?text=RS' },
  ];

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Good evening</h1>
        </div>
      </div>

      <section className="recently-played-section">
        <div className="recently-played-grid">
          {recentlyPlayed.map((item) => (
            <div key={item.id} className="recently-played-item">
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
              <button className="play-overlay">
                <Play size={20} fill="black" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-header">
          <h2>Made for you</h2>
          <button className="show-all">Show all</button>
        </div>
        <div className="content-grid">
          {madeForYou.map((item) => (
            <div key={item.id} className="content-card">
              <div className="card-image">
                <img src={item.image} alt={item.title} />
                <button className="card-play-btn">
                  <Play size={20} fill="black" />
                </button>
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-header">
          <h2>Your top artists</h2>
          <button className="show-all">Show all</button>
        </div>
        <div className="content-grid">
          {topArtists.map((artist) => (
            <div key={artist.id} className="content-card artist-card">
              <div className="card-image">
                <img src={artist.image} alt={artist.name} className="artist-image" />
                <button className="card-play-btn">
                  <Play size={20} fill="black" />
                </button>
              </div>
              <div className="card-content">
                <h3>{artist.name}</h3>
                <p>Artist</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;