# Required Secrets for GitHub Actions

## Setup Instructions

1. Go to: https://github.com/lturley87/ppg-landscape-tracker/settings/secrets/actions

2. Add these secrets:

### CLAUDE_API_KEY
- Get from: https://console.anthropic.com/api/keys
- Click "Create Key"
- Copy and paste the full key

### NEWSAPI_KEY  
- Get from: https://newsapi.org/register
- Free account includes 100 requests/day
- Copy and paste your API key

## Why These Are Needed

- **CLAUDE_API_KEY**: Powers the AI analysis of policy, news, and events
- **NEWSAPI_KEY**: Fetches recent news articles related to PPG landscape

## How to Add Secrets

1. Visit: https://github.com/lturley87/ppg-landscape-tracker/settings/secrets/actions
2. Click "New repository secret"
3. Name: `CLAUDE_API_KEY`, Value: [paste your key]
4. Click "New repository secret"
5. Name: `NEWSAPI_KEY`, Value: [paste your key]

Once added, the workflow will have access to these during automated runs.
