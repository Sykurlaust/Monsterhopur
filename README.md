# ELIXIR – Caffeine-Free Hydration

A modern, responsive landing page for ELIXIR hydration drinks. Built with pure HTML and CSS, featuring a sleek design with smooth animations and mobile-first approach.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI** - Clean, professional design with smooth animations
- **Fast Loading** - Optimized for performance
- **Accessible** - Built with accessibility in mind
- **SEO Ready** - Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No frameworks, just pure web standards
- **GitHub Actions** - Automated deployment workflow

## 📁 Project Structure

```
├── index.html              # Main landing page
├── .github/workflows/      # GitHub Actions workflows
│   └── deploy.yml         # Deployment configuration
├── package.json           # Project configuration
├── README.md             # This file
└── .gitignore           # Git ignore rules
```

## 🚀 Quick Start

### Prerequisites
- A modern web browser
- Python 3 (for local development server)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Eirikur1/MonsterVefsi-a.git
   cd MonsterVefsi-a
   ```

2. **Start local server**
   ```bash
   npm start
   # or
   python3 -m http.server 8000
   ```

3. **Open in browser**
   Navigate to `http://localhost:8000`

### Available Scripts

- `npm start` - Start local development server
- `npm run dev` - Start development server (alias)
- `npm run serve` - Start development server (alias)
- `npm run validate` - Validate HTML structure
- `npm run build` - Build the project
- `npm run test` - Run tests
- `npm run lint` - Run linting

## 🌐 Deployment

This project uses GitHub Actions for automated deployment to GitHub Pages.

### Automatic Deployment
- Every push to the `main` branch triggers automatic deployment
- The site is deployed to: https://eirikur1.github.io/MonsterVefsi-a/

### Manual Deployment
1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Check the Actions tab in your repository for deployment status

## 🎨 Customization

### Colors
The color scheme is defined in CSS custom properties:
```css
:root {
  --bg: #0b0b0b;        /* Background */
  --red: #e10e13;       /* Primary red */
  --text: #e7e7e7;      /* Text color */
  --muted: #bdbdbd;     /* Muted text */
  --outline: #ffffff33; /* Outlines */
}
```

### Fonts
- **Bebas Neue** - Used for headings and brand elements
- **Inter** - Used for body text and UI elements

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 980px - 1199px
- **Mobile**: Below 980px

## 🔧 Development Workflow

1. **Make changes** to your HTML/CSS files
2. **Test locally** using the development server
3. **Commit changes** with descriptive messages
4. **Push to main** branch
5. **GitHub Actions** automatically deploys to GitHub Pages

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Eirikur Karlsson**
- GitHub: [@Eirikur1](https://github.com/Eirikur1)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**ELIXIR** - Caffeine-free hydration and energy drinks. 🥤