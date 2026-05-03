# Games Images Directory

Place your game images in this directory. 

## Recommended Specifications:
- **Resolution**: 400x300px (4:3 ratio) or 640x360px (16:9 ratio)
- **Format**: JPG or PNG
- **File Size**: Under 500KB for optimal loading
- **Naming**: Use descriptive, lowercase names with hyphens (e.g., `super-puzzle-adventure.jpg`)

## Example Structure:
```
assets/games/
├── adventure-quest.jpg
├── puzzle-paradise.png
├── space-cat-runner.jpg
└── meow-match-saga.png
```

When you add images here, reference them in your `config/games.json` file like this:
```json
"image": "assets/games/your-game-image.jpg"
```