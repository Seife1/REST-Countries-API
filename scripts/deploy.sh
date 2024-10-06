#!/bin/bash

# Script to deploy the application
echo "Building the application..."

# Run the build command
npm run build

# Check if the build was successful
if [ $? -ne 0 ]; then
    echo "Build failed. Exiting..."
    exit 1
fi

echo "Build successful. Deploying the application..."

# Deploy to GitHub Pages
npm run deploy
echo "Deployment completed successfully!"
