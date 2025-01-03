﻿# AidBrisk

AidBrisk is an AI-powered first aid assistant designed to provide real-time, step-by-step first aid guidance during emergencies. Built using Next.js, Tailwind CSS, and Progressive Web App (PWA) features, AidBrisk empowers individuals to save lives by making first aid knowledge accessible and actionable.

## Features

- **AI-Powered First Aid Guidance**: Input symptoms or emergency scenarios and receive immediate step-by-step instructions.
- **Multilingual Support**: Guidance in multiple languages to ensure accessibility.
- **Emergency Contact Integration**: One-tap functionality to call emergency services and share location.
- **Offline Support**: Access critical first aid protocols even without an internet connection. (Not Available)
- **AR Integration (Optional)**: Visual overlays to demonstrate first aid techniques (Not Available).

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **AI Integration**: Google AI Studio
- **PWA Support**: Service Workers and Offline Storage

## Setup and Installation

Follow these steps to run AidBrisk locally:

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/aidbrisk.git
cd aidbrisk
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Obtain an API Key
- Go to [Google AI Studio](https://ai.google.com/studio) and generate an API key.
- This key will allow AidBrisk to access AI-powered functionalities.

### 4. Create an Environment File
- Create a `.env` file in the root directory of the project.
- Add your API key in the following format:
```env
NEXT_PUBLIC_GEMINI_API_KEY=your_api_key
```

### 5. Run the Application
```bash
npm run dev
```
- Open your browser and navigate to `http://localhost:3000` to use the application.

## Deployment
To deploy AidBrisk, follow these steps:

1. **Build the Project**:
   ```bash
   npm run build
   ```

2. **Start the Production Server**:
   ```bash
   npm run start
   ```

Alternatively, you can deploy it to platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/) for seamless hosting.

## Author
- [Arin Dewangan](https://aboutarin.vercel.app/)


## Acknowledgments

- [Laerdal Medical](https://laerdal.com/) for inspiring life-saving innovations.
- MediHacks for organizing MiniMedi 2024.

---

Start saving lives with **AidBrisk**!
