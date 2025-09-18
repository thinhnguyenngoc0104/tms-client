# TMS Token Generator

A React application with Auth0 authentication integration to generate accessToken.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Environment variables are already configured in `.env`:
   - `VITE_AUTH0_DOMAIN`
   - `VITE_AUTH0_CLIENT_ID`
   - `VITE_AUTH0_AUDIENCE`

3. Run the development server:
   ```bash
   npm run dev
   ```

## Authentication Flow

1. User visits the application
2. If not authenticated, redirected to login page
3. User clicks "Log In" button to authenticate with Auth0
4. After successful authentication, access token is saved to localStorage
5. User is redirected to dashboard