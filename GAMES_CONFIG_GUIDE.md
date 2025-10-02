# Meowsay Games - Game Configuration Guide

This guide explains how to easily manage your game portfolio using the `config/games.json` file.

## 📋 Quick Reference

To add a new game, simply edit `config/games.json` and add a new game object. The website will automatically load and display your games!

## 🎮 Game Object Structure

```json
{
  "id": "unique-game-identifier",
  "title": "Game Title",
  "description": "Brief description of the game (1-2 sentences)",
  "image": "assets/games/game-image.jpg",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "status": "released",
  "releaseDate": "2024-12-01",
  "platforms": ["iOS", "Android", "Web"],
  "links": {
    "appStore": "https://apps.apple.com/app/your-app",
    "googlePlay": "https://play.google.com/store/apps/details?id=your.app",
    "website": "https://your-game-website.com"
  },
  "featured": true
}
```

## 📝 Field Descriptions

### Required Fields

- **`id`**: Unique identifier for the game (no spaces, use hyphens)
- **`title`**: Display name of the game
- **`description`**: Brief description (recommended: 1-2 sentences)
- **`status`**: Current development/release status

### Optional Fields

- **`image`**: Path to game image (recommended: 400x300px or 16:9 ratio)
- **`tags`**: Array of genre/feature tags
- **`releaseDate`**: Release date in YYYY-MM-DD format
- **`platforms`**: Array of supported platforms
- **`links`**: Object containing store/website links
- **`featured`**: Boolean to highlight the game (featured games appear first)

## 🏷️ Status Options

- **`released`**: Game is live and available to play
- **`coming-soon`**: Game is announced but not yet released
- **`in-development`**: Game is actively being developed
- **`beta`**: Game is in beta testing phase
- **`alpha`**: Game is in early alpha testing

## 🎯 Platform Options

- **`iOS`**: Apple App Store
- **`Android`**: Google Play Store
- **`Web`**: Browser-based game
- **`Windows`**: Windows PC
- **`Mac`**: macOS
- **`Linux`**: Linux distributions

## 🏪 Store Links

### App Store
```json
"appStore": "https://apps.apple.com/app/your-app-name/id123456789"
```

### Google Play
```json
"googlePlay": "https://play.google.com/store/apps/details?id=com.yourcompany.yourgame"
```

### Website
```json
"website": "https://yourgame.com"
```

## 🖼️ Image Guidelines

### Recommended Specifications
- **Resolution**: 400x300px (4:3 ratio) or 640x360px (16:9 ratio)
- **Format**: JPG or PNG
- **File Size**: Under 500KB for optimal loading
- **Location**: Place images in `assets/games/` directory

### Example Structure
```
assets/
└── games/
    ├── adventure-quest.jpg
    ├── puzzle-paradise.png
    └── space-runner.jpg
```

## 🏷️ Tag Suggestions

### Genre Tags
- Adventure
- Puzzle
- Action
- Strategy
- RPG
- Racing
- Simulation
- Arcade

### Feature Tags
- Casual
- Multiplayer
- Single-player
- Free-to-play
- Premium
- Offline
- Brain Training
- Relaxing

### Platform Tags
- Mobile
- Desktop
- Cross-platform

## 📅 Example Configurations

### Released Game
```json
{
  "id": "super-puzzle-adventure",
  "title": "Super Puzzle Adventure",
  "description": "Embark on an epic puzzle-solving journey through mystical lands filled with challenging brain teasers.",
  "image": "assets/games/super-puzzle-adventure.jpg",
  "tags": ["Puzzle", "Adventure", "Casual"],
  "status": "released",
  "releaseDate": "2024-06-15",
  "platforms": ["iOS", "Android"],
  "links": {
    "appStore": "https://apps.apple.com/app/super-puzzle-adventure/id123456789",
    "googlePlay": "https://play.google.com/store/apps/details?id=com.meowsay.puzzleadventure",
    "website": "https://superpuzzleadventure.com"
  },
  "featured": true
}
```

### Coming Soon Game
```json
{
  "id": "space-cat-runner",
  "title": "Space Cat Runner",
  "description": "Join our feline hero on an intergalactic running adventure through colorful cosmic landscapes.",
  "image": "assets/games/space-cat-runner.jpg",
  "tags": ["Action", "Runner", "Casual"],
  "status": "coming-soon",
  "releaseDate": "2024-12-20",
  "platforms": ["iOS", "Android", "Web"],
  "links": {
    "website": "https://spacecatrunner.com"
  },
  "featured": false
}
```

### In Development Game
```json
{
  "id": "meow-match-saga",
  "title": "Meow Match Saga",
  "description": "A delightful match-3 game featuring adorable cats and exciting power-ups.",
  "tags": ["Match-3", "Casual", "Puzzle"],
  "status": "in-development",
  "releaseDate": "2025-03-01",
  "platforms": ["iOS", "Android"],
  "featured": false
}
```

## 🔄 Updating the Configuration

1. **Edit** `config/games.json`
2. **Add/modify** game objects in the `games` array
3. **Update** the `metadata` section:
   ```json
   "metadata": {
     "lastUpdated": "2024-09-29",
     "version": "1.0.0",
     "totalGames": 3
   }
   ```
4. **Save** the file
5. **Refresh** your website - changes appear automatically!

## ✅ Validation Checklist

Before adding a new game, ensure:

- [ ] Unique `id` (no spaces, use hyphens)
- [ ] Clear, concise `title`
- [ ] Engaging `description` (1-2 sentences)
- [ ] Appropriate `status` for current state
- [ ] Valid `releaseDate` in YYYY-MM-DD format
- [ ] Relevant `tags` (3-5 recommended)
- [ ] Correct `platforms` array
- [ ] Working `links` (test URLs)
- [ ] Optimized `image` in correct directory
- [ ] Updated `metadata.totalGames` count

## 🚀 Pro Tips

1. **Featured Games**: Set `featured: true` for important releases - they appear first
2. **Image Fallback**: Games without images show a beautiful placeholder
3. **Status Display**: Each status shows appropriate badges and call-to-action buttons
4. **Link Validation**: Only working links are displayed to users
5. **Responsive Design**: All game cards look great on mobile and desktop

## 🆘 Troubleshooting

### Game Not Appearing?
- Check JSON syntax validity
- Ensure the `games` array is properly formatted
- Verify the `id` is unique

### Image Not Loading?
- Confirm image path is correct
- Check image file exists in `assets/games/`
- Verify image format (JPG/PNG recommended)

### Links Not Working?
- Test URLs in browser
- Ensure proper HTTPS protocol
- Check for typos in link URLs

---

**Need Help?** Contact us at hello@meowsay.com