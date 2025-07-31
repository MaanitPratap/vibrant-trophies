# Backend API

This is the backend API for the Vibrant Trophies application.

## Database Setup

### 1. Start PostgreSQL Database

The project includes a Docker Compose configuration for PostgreSQL:

```bash
# Start the database
docker-compose up -d postgres

# Or use the setup script
./scripts/setup-db.sh
```

### 2. Environment Configuration

Create a `.env` file in the backend directory with the following variables:

```env
# Auth0 Configuration
AUTH0_ISSUER_BASE_URL='https://your-tenant.auth0.com'
AUTH0_CLIENT_ID='your-client-id'

# Server Configuration
PORT=3333

# Database Configuration
POSTGRES_USERNAME=VT_USER
POSTGRES_PASSWORD=DB_VT_PWD
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB_NAME=VibrantTrophies_DB
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Test Database Connection

```bash
npm run test-db
```

### 5. Start Development Server

```bash
npm run dev
```

## Database Schema

### Users Table

The `users` table includes the following columns:

- `user_id` (SERIAL PRIMARY KEY) - Auto-incrementing user ID
- `auth0_id` (VARCHAR(255) UNIQUE) - Auth0 user identifier
- `firstname` (VARCHAR(100) NOT NULL) - User's first name
- `lastname` (VARCHAR(100) NOT NULL) - User's last name
- `email` (VARCHAR(255) UNIQUE NOT NULL) - User's email address
- `username` (VARCHAR(100) UNIQUE NOT NULL) - User's username
- `role` (VARCHAR(50) NOT NULL DEFAULT 'user') - User's role
- `image_src` (TEXT) - User's profile image URL
- `is_active` (BOOLEAN DEFAULT true) - Whether the user account is active
- `email_verified` (BOOLEAN DEFAULT false) - Whether the email is verified
- `last_login` (TIMESTAMP) - Last login timestamp
- `creation_time` (TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP) - Account creation time
- `updated_at` (TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP) - Last update time

## API Endpoints

### Users

- `GET /api/users/email/:email` - Get user by email
- `POST /api/users` - Create new user
- `PUT /api/users/:userId` - Update user
- `GET /api/users` - Get all users (admin only)

All endpoints require JWT authentication via Auth0.

## Features

- ✅ Auto-incrementing user IDs
- ✅ Automatic `updated_at` timestamp updates via database triggers
- ✅ Auth0 integration
- ✅ CORS configuration for frontend
- ✅ Error handling middleware
- ✅ Database connection pooling
- ✅ TypeScript support 