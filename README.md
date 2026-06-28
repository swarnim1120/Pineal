# PINEAL — Deploy Guide

## Deploy FREE on Vercel (10 minutes)

### Step 1 — Get the code on GitHub
1. Go to github.com → sign up free
2. Click "New repository" → name it `pineal` → Create
3. Upload all these files to the repo

### Step 2 — Deploy on Vercel
1. Go to vercel.com → sign up with GitHub (free)
2. Click "Add New Project"
3. Select your `pineal` repo
4. Click Deploy — done. Vercel gives you a live URL instantly.

### Step 3 — Get your AI API keys (all free tiers available)
| Provider  | Free link                                      | Free credits        |
|-----------|------------------------------------------------|---------------------|
| OpenAI    | platform.openai.com/api-keys                   | $5 free on signup   |
| Anthropic | console.anthropic.com/settings/keys            | $5 free on signup   |
| Google    | aistudio.google.com/app/apikey                 | Completely free tier|
| DeepSeek  | platform.deepseek.com/api_keys                 | $2 free on signup   |

### Step 4 — Use Pineal
1. Open your Vercel URL
2. Click Settings → paste your API key
3. Select your model
4. Type any goal → Pineal executes it

## Local development
```bash
npm install
npm run dev
# Open http://localhost:3000
```
