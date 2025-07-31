#!/bin/bash

# Test script for Auth0 and Backend Integration

echo "🔐 Testing Auth0 and Backend Integration"
echo "=========================================="

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "❌ .env.local not found!"
    echo "Please copy env.example to .env.local and configure your Auth0 credentials"
    exit 1
fi

# Check if backend .env exists
if [ ! -f "backend/.env" ]; then
    echo "❌ backend/.env not found!"
    echo "Please copy backend/env.example to backend/.env and configure your Auth0 credentials"
    exit 1
fi

echo "✅ Environment files found"

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    npm install
fi

if [ ! -d "backend/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    cd backend && npm install && cd ..
fi

echo "✅ Dependencies installed"

# Check if backend is running
echo "🔍 Checking if backend is running..."
if curl -s http://localhost:3333/api/test > /dev/null 2>&1; then
    echo "✅ Backend is running on http://localhost:3333"
else
    echo "⚠️  Backend is not running"
    echo "To start the backend, run: cd backend && npm run dev"
fi

# Check if frontend is running
echo "🔍 Checking if frontend is running..."
if curl -s http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Frontend is running on http://localhost:3000"
else
    echo "⚠️  Frontend is not running"
    echo "To start the frontend, run: npm run dev"
fi

echo ""
echo "🚀 Testing Instructions:"
echo "1. Start the backend: cd backend && npm run dev"
echo "2. Start the frontend: npm run dev"
echo "3. Open http://localhost:3000"
echo "4. Click 'Sign In' to test authentication"
echo "5. Visit http://localhost:3000/test-auth to test backend integration"
echo ""
echo "📚 For detailed setup instructions, see AUTH0_SETUP.md" 