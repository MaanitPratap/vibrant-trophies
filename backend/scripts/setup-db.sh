#!/bin/bash

echo "Setting up database for Vibrant Trophies..."

# Check if docker-compose is running
if ! docker-compose ps | grep -q "postgres-vibrant-trophies"; then
    echo "Starting PostgreSQL container..."
    docker-compose up -d postgres
    echo "Waiting for PostgreSQL to be ready..."
    sleep 10
else
    echo "PostgreSQL container is already running"
fi

echo "Database setup complete!"
echo ""
echo "Make sure to set up your .env file with the following values:"
echo "POSTGRES_USERNAME=VT_USER"
echo "POSTGRES_PASSWORD=DB_VT_PWD"
echo "POSTGRES_HOST=localhost"
echo "POSTGRES_PORT=5432"
echo "POSTGRES_DB_NAME=VibrantTrophies_DB" 