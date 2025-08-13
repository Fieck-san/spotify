import axios from 'axios';

const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1';

interface SpotifyTrack {
  id: string;
  name: string;
  artists: { name: string; id: string }[];
  album: {
    name: string;
    images: { url: string; height: number; width: number }[];
  };
  duration_ms: number;
  preview_url: string | null;
  external_urls: {
    spotify: string;
  };
}

interface SpotifyPlaylist {
  id: string;
  name: string;
  description: string;
  images: { url: string; height: number; width: number }[];
  tracks: {
    total: number;
  };
  owner: {
    display_name: string;
  };
}

interface SpotifyArtist {
  id: string;
  name: string;
  images: { url: string; height: number; width: number }[];
  genres: string[];
  followers: {
    total: number;
  };
}

interface SpotifyAlbum {
  id: string;
  name: string;
  artists: { name: string; id: string }[];
  images: { url: string; height: number; width: number }[];
  release_date: string;
  total_tracks: number;
}

class SpotifyApi {
  private accessToken: string | null = null;

  setAccessToken(token: string) {
    this.accessToken = token;
  }

  private getHeaders() {
    return {
      'Authorization': `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
    };
  }

  async getCurrentUser() {
    try {
      const response = await axios.get(`${SPOTIFY_BASE_URL}/me`, {
        headers: this.getHeaders(),
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching current user:', error);
      throw error;
    }
  }

  async getUserPlaylists(userId: string, limit = 20, offset = 0): Promise<SpotifyPlaylist[]> {
    try {
      const response = await axios.get(
        `${SPOTIFY_BASE_URL}/users/${userId}/playlists`,
        {
          headers: this.getHeaders(),
          params: { limit, offset },
        }
      );
      return response.data.items;
    } catch (error) {
      console.error('Error fetching user playlists:', error);
      throw error;
    }
  }

  async getPlaylist(playlistId: string): Promise<SpotifyPlaylist> {
    try {
      const response = await axios.get(
        `${SPOTIFY_BASE_URL}/playlists/${playlistId}`,
        {
          headers: this.getHeaders(),
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching playlist:', error);
      throw error;
    }
  }

  async getPlaylistTracks(playlistId: string, limit = 50, offset = 0): Promise<SpotifyTrack[]> {
    try {
      const response = await axios.get(
        `${SPOTIFY_BASE_URL}/playlists/${playlistId}/tracks`,
        {
          headers: this.getHeaders(),
          params: { limit, offset },
        }
      );
      return response.data.items.map((item: any) => item.track);
    } catch (error) {
      console.error('Error fetching playlist tracks:', error);
      throw error;
    }
  }

  async search(query: string, types: string[] = ['track', 'artist', 'album', 'playlist'], limit = 20) {
    try {
      const response = await axios.get(`${SPOTIFY_BASE_URL}/search`, {
        headers: this.getHeaders(),
        params: {
          q: query,
          type: types.join(','),
          limit,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error searching:', error);
      throw error;
    }
  }

  async getFeaturedPlaylists(limit = 20, offset = 0) {
    try {
      const response = await axios.get(
        `${SPOTIFY_BASE_URL}/browse/featured-playlists`,
        {
          headers: this.getHeaders(),
          params: { limit, offset },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching featured playlists:', error);
      throw error;
    }
  }

  async getNewReleases(limit = 20, offset = 0) {
    try {
      const response = await axios.get(
        `${SPOTIFY_BASE_URL}/browse/new-releases`,
        {
          headers: this.getHeaders(),
          params: { limit, offset },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching new releases:', error);
      throw error;
    }
  }

  async getCategories(limit = 20, offset = 0) {
    try {
      const response = await axios.get(
        `${SPOTIFY_BASE_URL}/browse/categories`,
        {
          headers: this.getHeaders(),
          params: { limit, offset },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }

  async getTopTracks(timeRange = 'medium_term', limit = 20, offset = 0): Promise<SpotifyTrack[]> {
    try {
      const response = await axios.get(`${SPOTIFY_BASE_URL}/me/top/tracks`, {
        headers: this.getHeaders(),
        params: { time_range: timeRange, limit, offset },
      });
      return response.data.items;
    } catch (error) {
      console.error('Error fetching top tracks:', error);
      throw error;
    }
  }

  async getTopArtists(timeRange = 'medium_term', limit = 20, offset = 0): Promise<SpotifyArtist[]> {
    try {
      const response = await axios.get(`${SPOTIFY_BASE_URL}/me/top/artists`, {
        headers: this.getHeaders(),
        params: { time_range: timeRange, limit, offset },
      });
      return response.data.items;
    } catch (error) {
      console.error('Error fetching top artists:', error);
      throw error;
    }
  }

  async getRecentlyPlayed(limit = 20) {
    try {
      const response = await axios.get(
        `${SPOTIFY_BASE_URL}/me/player/recently-played`,
        {
          headers: this.getHeaders(),
          params: { limit },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching recently played:', error);
      throw error;
    }
  }
}

export const spotifyApi = new SpotifyApi();
export type { SpotifyTrack, SpotifyPlaylist, SpotifyArtist, SpotifyAlbum };