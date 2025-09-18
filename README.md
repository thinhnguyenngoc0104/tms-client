# TMS Client

A React application with Auth0 authentication integration.

## Features

- Auth0 authentication with automatic token storage
- Protected routing
- Simple dashboard with "Hello!" message
- Automatic redirect to dashboard after login

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

## Pages

- **Login Page** (`/login`): Auth0 login interface
- **Dashboard** (`/dashboard`): Protected page showing "Hello!" message

## Authentication Flow

1. User visits the application
2. If not authenticated, redirected to login page
3. User clicks "Log In" button to authenticate with Auth0
4. After successful authentication, access token is saved to localStorage
5. User is redirected to dashboard
6. Dashboard displays "Hello!" message with logout option
