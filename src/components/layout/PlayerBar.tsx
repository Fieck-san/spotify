import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Heart, Volume2, Monitor } from 'lucide-react';

const PlayerBar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [progress, setProgress] = useState(45);
  const [isLiked, setIsLiked] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState(0); // 0: off, 1: all, 2: one

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleLike = () => setIsLiked(!isLiked);
  const toggleShuffle = () => setIsShuffled(!isShuffled);
  const toggleRepeat = () => setRepeatMode((prev) => (prev + 1) % 3);

  return (
    <div className="player-bar">
      <div className="player-left">
        <div className="track-info">
          <img 
            src="https://via.placeholder.com/56x56/282828/ffffff?text=♪" 
            alt="Album Art" 
            className="album-art"
          />
          <div className="track-details">
            <div className="track-title">Song Title</div>
            <div className="track-artist">Artist Name</div>
          </div>
          <button 
            className={`like-btn ${isLiked ? 'liked' : ''}`}
            onClick={toggleLike}
          >
            <Heart size={16} fill={isLiked ? '#1db954' : 'none'} />
          </button>
        </div>
      </div>

      <div className="player-center">
        <div className="player-controls">
          <button 
            className={`control-btn ${isShuffled ? 'active' : ''}`}
            onClick={toggleShuffle}
          >
            <Shuffle size={16} />
          </button>
          <button className="control-btn">
            <SkipBack size={16} />
          </button>
          <button className="play-btn" onClick={togglePlay}>
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button className="control-btn">
            <SkipForward size={16} />
          </button>
          <button 
            className={`control-btn ${repeatMode > 0 ? 'active' : ''}`}
            onClick={toggleRepeat}
          >
            <Repeat size={16} />
            {repeatMode === 2 && <span className="repeat-one">1</span>}
          </button>
        </div>
        
        <div className="progress-bar">
          <span className="time">1:23</span>
          <div className="progress-track">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
            <div 
              className="progress-handle" 
              style={{ left: `${progress}%` }}
            ></div>
          </div>
          <span className="time">3:45</span>
        </div>
      </div>

      <div className="player-right">
        <button className="control-btn">
          <Monitor size={16} />
        </button>
        <div className="volume-control">
          <Volume2 size={16} />
          <div className="volume-slider">
            <div 
              className="volume-fill" 
              style={{ width: `${volume}%` }}
            ></div>
            <div 
              className="volume-handle" 
              style={{ left: `${volume}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;