# PPG Landscape Tracker

A live-updating policy, events, and news tracker powered by Claude AI.

## Overview

This tracker automatically collects and analyzes:
- **Policy Updates** - From Federal Register and government databases
- **News** - From NewsAPI and major news sources
- **Events & Announcements** - From public sources and calendars

All data is analyzed using Claude AI to extract key insights and trends.

## Features

- ✅ Automated updates every 30 minutes via GitHub Actions
- ✅ Claude AI-powered analysis and summarization
- ✅ Data from multiple sources (NewsAPI, Federal Register, public search)
- ✅ Beautiful, responsive web interface
- ✅ Live-updating on GitHub Pages

## Setup

### Prerequisites

- GitHub account with this repository
- Claude API key from [Anthropic](https://console.anthropic.com)
- NewsAPI key from [NewsAPI.org](https://newsapi.org) (free tier available)

### Installation

1. **Add Secrets to Repository**
   - Go to Settings → Secrets and variables → Actions
   - Add `CLAUDE_API_KEY`: Your Anthropic API key
   - Add `NEWSAPI_KEY`: Your NewsAPI key

2. **Enable GitHub Pages**
   - Settings → Pages
   - Source: Deploy from branch
   - Branch: `main`, Folder: `/ (root)`

3. **Access Your Tracker**
   - Visit: `https://YOUR_USERNAME.github.io/ppg-landscape-tracker/`

## How It Works

1. **Data Collection** (scripts/update_tracker.py)
   - Fetches recent news from NewsAPI
   - Queries Federal Register API for policy updates
   - Searches public sources for events

2. **Claude Analysis**
   - Sends collected data to Claude API
   - Claude analyzes and summarizes key trends
   - Extracts insights and recommendations

3. **Web Display**
   - Results saved to `tracker-data.json`
   - Frontend (index.html, app.js) loads and displays data
   - GitHub Pages serves the live site

4. **Auto-Update**
   - GitHub Actions workflow runs every 30 minutes
   - Automatically commits updated data
   - Site updates automatically

## Configuration

### Update Frequency

Edit `.github/workflows/update-tracker.yml` to change the schedule:

```yaml
schedule:
  - cron: '*/30 * * * *'  # Change 30 to desired minutes (5, 15, 60, etc)
```

### Data Sources

Customize the Python script in `scripts/update_tracker.py` to:
- Add additional APIs
- Change search queries
- Modify data parsing logic

## File Structure

```
├── index.html              # Main page
├── styles.css              # Styling
├── app.js                  # Frontend logic
├── tracker-data.json       # Current data (auto-generated)
├── scripts/
│   └── update_tracker.py   # Data collection & Claude analysis
└── .github/
    └── workflows/
        └── update-tracker.yml  # GitHub Actions workflow
```

## API Keys Required

1. **Claude API Key**
   - Get from: https://console.anthropic.com
   - Set as: `CLAUDE_API_KEY` secret

2. **NewsAPI Key** (Optional but recommended)
   - Get from: https://newsapi.org
   - Free tier: 100 requests/day
   - Set as: `NEWSAPI_KEY` secret

3. **Federal Register API**
   - No key required
   - Free public API

## Troubleshooting

### Workflow not running?
- Check GitHub Actions is enabled in Settings
- Verify secrets are set correctly
- Check workflow logs in Actions tab

### No data showing?
- Wait 30 minutes for first run
- Check workflow logs for errors
- Verify API keys are valid

### GitHub Pages not loading?
- Ensure Pages is enabled in Settings
- Check branch is set to `main`
- Clear browser cache

## Customization

### Change Update Frequency
See "Update Frequency" section above

### Modify Claude Prompt
Edit the `analyze_with_claude()` function in `scripts/update_tracker.py`

### Add New Data Sources
Add new fetch functions in `scripts/update_tracker.py` and integrate into the main workflow

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please open an issue in the GitHub repository.

---

**Last Updated**: [Auto-generated]
**Powered by**: Claude AI + GitHub Actions + GitHub Pages
