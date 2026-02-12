#!/bin/bash

echo "🚀 Installing AgentFleet..."
echo ""

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is required but not installed."
    echo "   Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

# Check Node version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js 18+ is required (you have $(node -v))"
    exit 1
fi

# Check for OpenClaw
if ! command -v openclaw &> /dev/null; then
    echo "⚠️  OpenClaw CLI not found."
    echo "   AgentFleet works best with OpenClaw."
    echo "   Install from: https://openclaw.ai"
    echo ""
    read -p "Continue without OpenClaw? (y/n) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo "📦 Installing dependencies..."
npm install

echo ""
echo "🔧 Setting up environment..."
if [ ! -f .env ]; then
    cp .env.example .env
    echo "   Created .env file (configure your settings there)"
fi

echo ""
echo "✅ Installation complete!"
echo ""
echo "🚀 Quick Start:"
echo "   1. Run 'npm run dev' to start the development server"
echo "   2. Open http://localhost:3000"
echo "   3. Create your first AI agent!"
echo ""
echo "📚 Documentation: https://github.com/opsflowsh/agentfleet"
echo "💬 Need help? Join our Discord!"