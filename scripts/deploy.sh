#!/bin/bash

# Script to deploy the application
echo "Building the application..."

# Run the build command (assuming you use Vite)
npm run build

# Check if the build was successful
if [ $? -ne 0 ]; then
    echo "Build failed. Exiting..."
    exit 1
fi

echo "Build successful. Deploying the application..."

# Deploy to GitHub Pages
git add dist && git commit -m "Deploy" && git push origin gh-pages

echo "Deployment completed successfully!"
