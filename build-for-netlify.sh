#!/bin/bash

# KoraNav - Netlify Build Script
# This script builds your frontend for deployment to Netlify

echo "🚀 Building KoraNav website for Netlify deployment..."
echo ""

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist/public

# Run the build
echo "⚡ Building frontend..."
npm run build

# Show what was generated
echo ""
echo "✅ Build complete! Generated files:"
echo ""
ls -lh dist/public/
echo ""
echo "📦 Assets generated:"
ls -lh dist/public/assets/
echo ""
echo "✨ Your website is ready to deploy!"
echo ""
echo "📂 Upload the 'dist/public' folder to Netlify"
echo "   or push to GitHub and connect to Netlify with:"
echo "   • Build command: npm run build"
echo "   • Publish directory: dist/public"
echo ""
