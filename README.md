# Meowsay Games Website

Welcome to the official website repository for Meowsay Games, a casual gaming studio creating engaging experiences for global audiences.

## 🎮 About

Meowsay Games is a passionate indie game development studio focused on creating delightful casual gaming experiences. We specialize in accessible, engaging games that bring joy to players of all ages and skill levels, with a particular focus on the European and American markets.

## 🌟 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dynamic Game Management**: Easy-to-update game configuration system
- **Performance Optimized**: Fast loading times and smooth interactions
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🚀 Quick Start

### Local Development

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd meowsaygames.com
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. Visit `http://localhost:8000` to view the website

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy to Vercel:
   ```bash
   vercel
   ```

3. Follow the prompts to configure your deployment

## 📁 Project Structure

```
meowsaygames.com/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js            # Main JavaScript file
├── assets/
│   ├── meowsay.svg        # Company logo
│   └── games/             # Game images (to be added)
├── config/
│   └── games.json         # Game configuration file
├── vercel.json            # Vercel deployment configuration
└── README.md              # This file
```

## 🎯 Managing Games

The website features a dynamic game management system. To add, edit, or remove games:

### Adding a New Game

1. Open `config/games.json`
2. Add a new game object to the `games` array:

```json
{
  "id": "unique-game-id",
  "title": "Your Game Title",
  "description": "Brief description of your game",
  "image": "assets/games/your-game-image.jpg",
  "tags": ["Casual", "Puzzle", "Adventure"],
  "status": "released", // or "coming-soon", "in-development", "beta", "alpha"
  "releaseDate": "2024-12-01",
  "platforms": ["iOS", "Android", "Web"],
  "links": {
    "appStore": "https://apps.apple.com/your-app",
    "googlePlay": "https://play.google.com/your-app",
    "website": "https://your-game-website.com"
  },
  "featured": true // Set to true for featured games
}
```

3. Update the `metadata` section:
   - `lastUpdated`: Current date
   - `totalGames`: Increment the count

4. Add the game image to `assets/games/` directory

### Game Status Options

- `released`: Game is live and available
- `coming-soon`: Game is announced but not yet released
- `in-development`: Game is in active development
- `beta`: Game is in beta testing
- `alpha`: Game is in alpha testing

### Supported Platforms

- `iOS`: Apple App Store
- `Android`: Google Play Store
- `Web`: Browser-based games
- `Windows`: Windows PC
- `Mac`: macOS
- `Linux`: Linux distributions

## 🎨 Customization

### Colors and Theming

The website uses CSS custom properties (variables) for consistent theming. Modify the values in `css/styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #f59e0b;
    --accent-color: #ec4899;
    /* ... other variables */
}
```

### Typography

The website uses Google Fonts:
- **Inter**: Body text and UI elements
- **Poppins**: Headings and emphasis

To change fonts, update the Google Fonts import in `index.html` and the CSS variables in `styles.css`.

### Content Updates

- **Company Information**: Edit the content directly in `index.html`
- **Contact Email**: Update `hello@meowsay.com` in the HTML
- **About Section**: Modify the about cards and statistics
- **Footer**: Update copyright and links

## 🔧 Technical Details

### Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with Flexbox/Grid, custom properties, and animations
- **Vanilla JavaScript**: No frameworks for optimal performance
- **JSON**: Configuration-driven content management

### Performance Features

- **Optimized Images**: SVG logo for scalability
- **CSS Animations**: Hardware-accelerated transformations
- **Lazy Loading**: Efficient resource loading
- **Caching Headers**: Proper cache control for static assets

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Responsiveness

The website is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktop computers (1024px+)
- Large screens (1440px+)

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the project type
3. Deploy with zero configuration

### Other Platforms

The website is compatible with:
- Netlify
- GitHub Pages
- Firebase Hosting
- Any static hosting service

## 📧 Contact

For questions about this website or Meowsay Games:
- Email: hello@meowsay.com
- Website: [meowsaygames.com](https://meowsaygames.com)

## 📄 License

© 2024 Meowsay Games. All rights reserved.

---

**Built with ❤️ by Meowsay Games**