#!/bin/sh

# Install all the dependencies for the project
npm install --legacy-peer-deps

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    touch .env
    # Append the env schema
    echo "Generating the .env file..."
    cat <<EOF >> .env
PORT=3005
REACT_APP_API_URL=http://localhost:3000
EOF
fi