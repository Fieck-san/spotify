# Spotify Clone

A full-featured Spotify clone built with React, TypeScript, and Redux, featuring a modern dark theme interface that closely matches Spotify's design.

## Features

### 🎵 Core Functionality
- **Spotify Web API Integration** - Connect with real Spotify data
- **Authentication** - Login with Spotify account
- **Music Player** - Play/pause, skip tracks, volume control, progress bar
- **Search** - Real-time search for songs, artists, albums, and playlists
- **Playlists** - View and interact with playlists
- **Responsive Design** - Works on desktop, tablet, and mobile

### 🎨 Design & UI
- **Dark Theme** - Spotify's signature dark interface
- **3-Panel Layout** - Sidebar, main content, and player bar
- **Modern Components** - Cards, hover effects, animations
- **Professional Polish** - Loading states, error handling, accessibility

### 🏗️ Technical Features
- **React 18** with TypeScript
- **Redux Toolkit** for state management
- **React Router** for navigation
- **Responsive CSS Grid/Flexbox** layouts
- **Lucide React** icons
- **Axios** for API calls

## Screenshots

### Home Page
- Hero section with greeting
- Recently played items with play buttons
- Content sections (Made for You, Top Artists)
- Responsive grid layouts

### Search Page
- Search bar with real-time functionality
- Browse categories with colorful tiles
- Search results with tabs (All, Songs, Artists, Albums, Playlists)
- Recent searches

### Playlist View
- Large playlist header with cover art
- Track listing table with play buttons
- Like/unlike functionality
- Professional typography and spacing

### Player Bar
- Current track info with album art
- Full playback controls (play/pause, skip, repeat, shuffle)
- Progress bar with seeking
- Volume control
- Responsive design

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd spotify-clone
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Spotify API Setup
1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new app
3. Get your Client ID
4. Add `http://localhost:3000/callback` to Redirect URIs

### 4. Environment Configuration
Update `.env.local` with your Spotify credentials:
```env
REACT_APP_SPOTIFY_CLIENT_ID=your_spotify_client_id_here
REACT_APP_REDIRECT_URI=http://localhost:3000/callback
```

### 5. Run the Application
```bash
npm start
```

The app will open at `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Sidebar, MainContent, PlayerBar)
│   └── ui/              # Reusable UI components
├── pages/               # Page components (Home, Search, Playlist, Login)
├── services/            # API services (Spotify API, Authentication)
├── store/               # Redux store and slices
├── styles/              # Global CSS styles
├── types/               # TypeScript type definitions
└── hooks/               # Custom React hooks
```

## Key Components

### Layout Components
- **Sidebar** - Navigation and playlist library
- **MainContent** - Dynamic content area
- **PlayerBar** - Music controls and track info

### Pages
- **Home** - Dashboard with recently played and recommendations
- **Search** - Search functionality and browse categories
- **Playlist** - Detailed playlist view with track listings
- **Login** - Spotify authentication
- **Callback** - OAuth callback handling

### State Management
- **authSlice** - User authentication and profile
- **playerSlice** - Music player state and controls
- **playlistSlice** - Playlist data and management

## Responsive Breakpoints

- **Desktop (1200px+)** - Full 3-panel layout
- **Tablet (768px-1199px)** - Collapsed sidebar, adapted layouts
- **Mobile (320px-767px)** - Mobile-optimized interface

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better DX
- **Redux Toolkit** - Efficient Redux with less boilerplate
- **React Router v6** - Client-side routing
- **Axios** - HTTP client for API calls
- **Lucide React** - Modern icon library
- **CSS3** - Custom properties, Grid, Flexbox

## API Integration

The app integrates with the Spotify Web API for:
- User authentication and profile data
- Playlist and track information
- Search functionality
- Recently played tracks
- Top artists and songs

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Build the project
2. Deploy the `build` folder
3. Configure environment variables on your hosting platform
4. Update Spotify app redirect URIs for production domain

## Development Notes

### Authentication Flow
1. User clicks "Login with Spotify"
2. Redirected to Spotify OAuth
3. Spotify redirects to `/callback` with authorization code
4. Token is stored in localStorage
5. API calls include Bearer token

### Player Implementation
- Uses Spotify Web Playback SDK for 30-second previews
- State managed through Redux
- Real-time progress updates
- Volume and seek controls

### Responsive Design Strategy
- Mobile-first CSS approach
- CSS Grid for complex layouts
- Flexbox for component alignment
- Media queries for breakpoint adaptations

## Future Enhancements

- Full track playback (requires Spotify Premium)
- Offline mode with cached data
- Custom playlist creation
- Social features (following artists/users)
- Advanced search filters
- Queue management
- Lyrics integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes and demonstration of React/TypeScript skills. Spotify is a trademark of Spotify AB.