import React, { useState } from 'react';
import { Play, Pause, Heart, MoreHorizontal, Clock, Download } from 'lucide-react';

interface PlaylistProps {
  playlistId?: string;
}

const Playlist: React.FC<PlaylistProps> = ({ playlistId = '1' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedTracks, setLikedTracks] = useState<Set<number>>(new Set());

  const playlist = {
    id: '1',
    name: 'My Playlist #1',
    description: 'Your favorite songs all in one place',
    image: 'https://via.placeholder.com/300x300/1db954/ffffff?text=♥',
    owner: 'User Name',
    followers: 1234,
    duration: '2 hr 34 min',
    tracks: [
      {
        id: 1,
        name: 'Bohemian Rhapsody',
        artist: 'Queen',
        album: 'A Night at the Opera',
        duration: '5:55',
        image: 'https://via.placeholder.com/40x40/282828/ffffff?text=Q',
        addedAt: '5 days ago'
      },
      {
        id: 2,
        name: 'Hotel California',
        artist: 'Eagles',
        album: 'Hotel California',
        duration: '6:30',
        image: 'https://via.placeholder.com/40x40/282828/ffffff?text=E',
        addedAt: '1 week ago'
      },
      {
        id: 3,
        name: 'Stairway to Heaven',
        artist: 'Led Zeppelin',
        album: 'Led Zeppelin IV',
        duration: '8:02',
        image: 'https://via.placeholder.com/40x40/282828/ffffff?text=LZ',
        addedAt: '2 weeks ago'
      },
      {
        id: 4,
        name: 'Imagine',
        artist: 'John Lennon',
        album: 'Imagine',
        duration: '3:07',
        image: 'https://via.placeholder.com/40x40/282828/ffffff?text=JL',
        addedAt: '3 weeks ago'
      },
      {
        id: 5,
        name: 'Sweet Child O\' Mine',
        artist: 'Guns N\' Roses',
        album: 'Appetite for Destruction',
        duration: '5:03',
        image: 'https://via.placeholder.com/40x40/282828/ffffff?text=GNR',
        addedAt: '1 month ago'
      }
    ]
  };

  const togglePlaylist = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleLike = (trackId: number) => {
    const newLiked = new Set(likedTracks);
    if (newLiked.has(trackId)) {
      newLiked.delete(trackId);
    } else {
      newLiked.add(trackId);
    }
    setLikedTracks(newLiked);
  };

  return (
    <div className="playlist-page">
      <div className="playlist-header">
        <div className="playlist-cover">
          <img src={playlist.image} alt={playlist.name} />
        </div>
        <div className="playlist-info">
          <div className="playlist-type">Playlist</div>
          <h1 className="playlist-title">{playlist.name}</h1>
          <div className="playlist-description">{playlist.description}</div>
          <div className="playlist-metadata">
            <span className="playlist-owner">{playlist.owner}</span>
            <span className="separator">•</span>
            <span className="playlist-followers">{playlist.followers.toLocaleString()} likes</span>
            <span className="separator">•</span>
            <span className="playlist-stats">{playlist.tracks.length} songs, {playlist.duration}</span>
          </div>
        </div>
      </div>

      <div className="playlist-actions">
        <button className="play-button-large" onClick={togglePlaylist}>
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button className="action-button">
          <Heart size={24} />
        </button>
        <button className="action-button">
          <Download size={24} />
        </button>
        <button className="action-button">
          <MoreHorizontal size={24} />
        </button>
      </div>

      <div className="playlist-tracks">
        <div className="tracks-header">
          <div className="track-number-header">#</div>
          <div className="track-title-header">Title</div>
          <div className="track-album-header">Album</div>
          <div className="track-added-header">Date added</div>
          <div className="track-duration-header">
            <Clock size={16} />
          </div>
        </div>

        <div className="tracks-list">
          {playlist.tracks.map((track, index) => (
            <div key={track.id} className="track-row">
              <div className="track-number">
                <span className="track-index">{index + 1}</span>
                <Play size={16} className="track-play-icon" />
              </div>
              
              <div className="track-title-cell">
                <img src={track.image} alt={track.album} className="track-image" />
                <div className="track-info">
                  <div className="track-name">{track.name}</div>
                  <div className="track-artist">{track.artist}</div>
                </div>
              </div>
              
              <div className="track-album">{track.album}</div>
              <div className="track-added">{track.addedAt}</div>
              
              <div className="track-actions">
                <button
                  className={`like-button ${likedTracks.has(track.id) ? 'liked' : ''}`}
                  onClick={() => toggleLike(track.id)}
                >
                  <Heart size={16} fill={likedTracks.has(track.id) ? '#1db954' : 'none'} />
                </button>
                <div className="track-duration">{track.duration}</div>
                <button className="track-menu">
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist;