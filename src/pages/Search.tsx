import React, { useState } from 'react';
import { Search as SearchIcon, Play } from 'lucide-react';

interface Track {
  id: number;
  name: string;
  artist: string;
  album: string;
  duration: string;
  image: string;
}

interface Artist {
  id: number;
  name: string;
  followers: string;
  image: string;
}

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{
    tracks: Track[];
    artists: Artist[];
    albums: any[];
    playlists: any[];
  }>({
    tracks: [],
    artists: [],
    albums: [],
    playlists: [],
  });
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 1, title: 'Podcasts', color: 'rgb(0, 100, 80)', image: 'https://via.placeholder.com/200x200/006450/ffffff?text=🎙️' },
    { id: 2, title: 'Made For You', color: 'rgb(30, 50, 100)', image: 'https://via.placeholder.com/200x200/1e3264/ffffff?text=👤' },
    { id: 3, title: 'Charts', color: 'rgb(141, 103, 171)', image: 'https://via.placeholder.com/200x200/8d67ab/ffffff?text=📈' },
    { id: 4, title: 'New Releases', color: 'rgb(230, 30, 50)', image: 'https://via.placeholder.com/200x200/e61e32/ffffff?text=🆕' },
    { id: 5, title: 'Hip-Hop', color: 'rgb(186, 93, 7)', image: 'https://via.placeholder.com/200x200/ba5d07/ffffff?text=🎤' },
    { id: 6, title: 'Pop', color: 'rgb(220, 20, 140)', image: 'https://via.placeholder.com/200x200/dc148c/ffffff?text=🎵' },
    { id: 7, title: 'Indie', color: 'rgb(255, 100, 55)', image: 'https://via.placeholder.com/200x200/ff6437/ffffff?text=🎸' },
    { id: 8, title: 'Rock', color: 'rgb(230, 30, 50)', image: 'https://via.placeholder.com/200x200/e61e32/ffffff?text=🤘' },
    { id: 9, title: 'Latin', color: 'rgb(255, 200, 100)', image: 'https://via.placeholder.com/200x200/ffc864/ffffff?text=🌮' },
    { id: 10, title: 'Workout', color: 'rgb(20, 138, 8)', image: 'https://via.placeholder.com/200x200/148a08/ffffff?text=💪' },
    { id: 11, title: 'Chill', color: 'rgb(71, 125, 149)', image: 'https://via.placeholder.com/200x200/477d95/ffffff?text=😌' },
    { id: 12, title: 'Sleep', color: 'rgb(30, 50, 100)', image: 'https://via.placeholder.com/200x200/1e3264/ffffff?text=😴' },
  ];

  const recentSearches = [
    'The Beatles',
    'Taylor Swift',
    'Billie Eilish',
    'Drake',
  ];

  const sampleTracks = [
    {
      id: 1,
      name: 'Bohemian Rhapsody',
      artist: 'Queen',
      album: 'A Night at the Opera',
      duration: '5:55',
      image: 'https://via.placeholder.com/64x64/282828/ffffff?text=Q'
    },
    {
      id: 2,
      name: 'Hotel California',
      artist: 'Eagles',
      album: 'Hotel California',
      duration: '6:30',
      image: 'https://via.placeholder.com/64x64/282828/ffffff?text=E'
    },
    {
      id: 3,
      name: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      album: 'Led Zeppelin IV',
      duration: '8:02',
      image: 'https://via.placeholder.com/64x64/282828/ffffff?text=LZ'
    },
  ];

  const sampleArtists = [
    {
      id: 1,
      name: 'The Beatles',
      followers: '24,123,456',
      image: 'https://via.placeholder.com/200x200/282828/ffffff?text=TB'
    },
    {
      id: 2,
      name: 'Queen',
      followers: '18,567,890',
      image: 'https://via.placeholder.com/200x200/282828/ffffff?text=Q'
    },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 0) {
      setSearchResults({
        tracks: sampleTracks,
        artists: sampleArtists,
        albums: [],
        playlists: [],
      });
    } else {
      setSearchResults({
        tracks: [],
        artists: [],
        albums: [],
        playlists: [],
      });
    }
  };

  const formatDuration = (duration: string) => {
    return duration;
  };

  return (
    <div className="search-page">
      <div className="search-header">
        <div className="search-input-container">
          <SearchIcon size={24} className="search-icon" />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {!searchQuery ? (
        <div className="search-browse">
          {recentSearches.length > 0 && (
            <section className="recent-searches">
              <h2>Recent searches</h2>
              <div className="recent-searches-list">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    className="recent-search-item"
                    onClick={() => handleSearch(search)}
                  >
                    {search}
                  </button>
                ))}
              </div>
            </section>
          )}

          <section className="browse-categories">
            <h2>Browse all</h2>
            <div className="categories-grid">
              {categories.map((category) => (
                <div key={category.id} className="category-card" style={{ backgroundColor: category.color }}>
                  <h3>{category.title}</h3>
                  <div className="category-image">
                    <img src={category.image} alt={category.title} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <div className="search-results">
          <div className="search-tabs">
            <button
              className={`search-tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All
            </button>
            <button
              className={`search-tab ${activeTab === 'tracks' ? 'active' : ''}`}
              onClick={() => setActiveTab('tracks')}
            >
              Songs
            </button>
            <button
              className={`search-tab ${activeTab === 'artists' ? 'active' : ''}`}
              onClick={() => setActiveTab('artists')}
            >
              Artists
            </button>
            <button
              className={`search-tab ${activeTab === 'albums' ? 'active' : ''}`}
              onClick={() => setActiveTab('albums')}
            >
              Albums
            </button>
            <button
              className={`search-tab ${activeTab === 'playlists' ? 'active' : ''}`}
              onClick={() => setActiveTab('playlists')}
            >
              Playlists
            </button>
          </div>

          {(activeTab === 'all' || activeTab === 'tracks') && searchResults.tracks.length > 0 && (
            <section className="search-section">
              <h2>Songs</h2>
              <div className="tracks-list">
                {searchResults.tracks.map((track) => (
                  <div key={track.id} className="track-item">
                    <div className="track-number">
                      <Play size={16} className="track-play-btn" />
                    </div>
                    <div className="track-image">
                      <img src={track.image} alt={track.album} />
                    </div>
                    <div className="track-info">
                      <div className="track-name">{track.name}</div>
                      <div className="track-artist">{track.artist}</div>
                    </div>
                    <div className="track-album">{track.album}</div>
                    <div className="track-duration">{formatDuration(track.duration)}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {(activeTab === 'all' || activeTab === 'artists') && searchResults.artists.length > 0 && (
            <section className="search-section">
              <h2>Artists</h2>
              <div className="artists-grid">
                {searchResults.artists.map((artist) => (
                  <div key={artist.id} className="artist-card">
                    <div className="artist-image">
                      <img src={artist.image} alt={artist.name} />
                      <button className="card-play-btn">
                        <Play size={20} fill="black" />
                      </button>
                    </div>
                    <div className="artist-info">
                      <h3>{artist.name}</h3>
                      <p>Artist • {artist.followers} followers</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;