# Groq AI Chat Widget Setup

## Overview
The Emynite Max website now includes an AI-powered chat widget using Groq's LLaMA model to assist visitors with information about the company's services.

## Setup Instructions

### 1. Get Groq API Key
1. Visit [Groq Console](https://console.groq.com/keys)
2. Sign up or log in to your account
3. Create a new API key
4. Copy the API key

### 2. Environment Configuration
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Add your Groq API key to `.env`:
   ```
   VITE_GROQ_API_KEY=your_actual_groq_api_key_here
   ```

### 3. Features Included
- **Smart Chat Widget**: AI assistant with company knowledge
- **Company Context**: Pre-loaded with Emynite Max information
- **Real Estate Info**: Property listings, prices, locations
- **Service Details**: All business divisions and offerings
- **Contact Integration**: Direct contact information and WhatsApp
- **Responsive Design**: Works on desktop and mobile

### 4. Chat Widget Capabilities
The AI assistant can help with:
- Real estate property inquiries
- Automobile sales information
- Agricultural export services
- Investment opportunities
- Contact information
- Business hours and locations
- Service pricing and availability

### 5. Technical Implementation
- **Frontend**: React component with Framer Motion animations
- **AI Model**: Groq LLaMA 3 8B model
- **Context**: Comprehensive company information
- **Fallback**: Direct contact info when AI is unavailable
- **Security**: API key stored in environment variables

### 6. Usage
- Chat widget appears as floating button (bottom right)
- Click to open chat interface
- AI responds with company-specific information
- Fallback to human contact for complex queries

### 7. Customization
The AI context can be updated in `src/utils/groqClient.js` to include:
- New property listings
- Updated pricing
- Additional services
- Seasonal promotions
- Company news

## Files Added/Modified
- `src/components/ChatWidget.jsx` - Main chat interface
- `src/utils/groqClient.js` - Groq API integration
- `src/hooks/useGroqChat.js` - Custom React hook
- `src/api/chat.js` - Chat API handler
- `.env.example` - Environment template
- `src/App.jsx` - Added ChatWidget component

## Dependencies
- `groq-sdk` - Official Groq JavaScript SDK
- Existing React/Framer Motion dependencies