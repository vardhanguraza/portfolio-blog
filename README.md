# Portfolio Blog 📱

A modern, professional portfolio and blog website built with **React 18**, **TypeScript**, and **Material-UI**. Features a clean, responsive design optimized for 2025 with smooth animations and professional styling.

## ✨ Features

- **TypeScript Support** - Full type safety across the application
- **Modern UI/UX** - Material-UI 5 with custom theme and gradients
- **Responsive Design** - Mobile-first approach with CSS Grid and Flexbox
- **SCSS Architecture** - Centralized design tokens and reusable mixins
- **Blog System** - Dynamic blog listing with category filtering
- **Profile Section** - Showcase skills, experience, and work history
- **Professional Navigation** - Sticky navbar with smooth scrolling
- **Code Quality** - ESLint and strict TypeScript mode enabled

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/vardhanguraza/portfolio-blog.git
cd portfolio-blog

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start development server (runs on http://localhost:3000)
npm start
# or
yarn start
```

The app will automatically reload when you make changes.

### Production Build

```bash
# Build optimized production bundle
npm run build
# or
yarn build
```

The build folder contains the production-ready files, minified and optimized.

### Testing

```bash
npm test
# or
yarn test
```

Runs the test suite in interactive watch mode.

## 📁 Project Structure

```
portfolio-blog/
├── public/                          # Static assets
│   ├── index.html                   # HTML entry point
│   ├── manifest.json                # PWA manifest
│   └── robots.txt                   # SEO robots file
│
├── src/
│   ├── components/                  # Reusable UI components
│   │   ├── layout/
│   │   │   └── NavBar.tsx           # Navigation bar component
│   │   │   └── NavBar.module.scss   # Navigation styles
│   │   ├── tile/
│   │   │   ├── Tile.tsx             # Reusable card/tile component
│   │   │   └── Tile.module.scss     # Tile styles
│   │   └── MaterialUI/
│   │       └── index.ts             # Centralized Material-UI exports
│   │
│   ├── containers/                  # Page-level containers
│   │   ├── Profile/
│   │   │   ├── Profile.tsx          # Main profile page
│   │   │   ├── Profile.module.scss  # Profile container styles
│   │   │   └── components/
│   │   │       ├── SkillsTile.tsx   # Skills sub-component
│   │   │       ├── ExperienceTile.tsx  # Experience sub-component
│   │   │       ├── ContractsTile.tsx   # Work history sub-component
│   │   │       └── SubComponents.module.scss
│   │   │
│   │   └── Blogs/
│   │       ├── Blogs.tsx            # Main blogs page
│   │       ├── Blogs.module.scss    # Blog container styles
│   │       └── components/
│   │           ├── BlogCard.tsx     # Individual blog card
│   │           └── BlogCard.module.scss
│   │
│   ├── types/                       # TypeScript type definitions
│   │   ├── common.ts                # Common interfaces
│   │   ├── profile.ts               # Profile data types
│   │   ├── blog.ts                  # Blog data types
│   │   └── index.ts                 # Type exports
│   │
│   ├── theme/                       # Material-UI theme configuration
│   │   ├── index.ts                 # Theme setup
│   │   ├── palette.ts               # Color palette & gradients
│   │   └── typography.ts            # Font configuration
│   │
│   ├── styles/                      # Global SCSS
│   │   └── variables.scss           # Design tokens & mixins
│   │
│   ├── App.tsx                      # Root component with routing
│   ├── App.scss                     # Global app styles
│   ├── index.tsx                    # React entry point
│   ├── index.scss                   # Global base styles
│   ├── scss.d.ts                    # TypeScript SCSS module declarations
│   ├── reportWebVitals.tsx          # Performance monitoring
│   ├── setupTests.tsx               # Test configuration
│   └── App.test.tsx                 # App tests
│
├── ARCHITECTURE.md                  # Architecture documentation
├── SCSS_MIGRATION.md                # SCSS migration guide
├── tsconfig.json                    # TypeScript configuration
├── tsconfig.node.json               # TypeScript config for Node
├── package.json                     # Project dependencies
├── package-lock.json                # Dependency lock file
└── README.md                        # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: `#1a73e8` - Google Blue
- **Secondary**: `#00bcd4` - Cyan
- **Success**: `#4caf50` - Green
- **Warning**: `#ff9800` - Orange
- **Danger**: `#f44336` - Red

### Spacing Scale
```scss
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 12px;
$spacing-lg: 16px;
$spacing-xl: 20px;
$spacing-2xl: 24px;
```

### Responsive Breakpoints
```scss
$breakpoint-xs: 480px;   // Mobile
$breakpoint-sm: 640px;   // Small tablet
$breakpoint-md: 768px;   // Tablet
$breakpoint-lg: 1024px;  // Desktop
$breakpoint-xl: 1280px;  // Large desktop
$breakpoint-2xl: 1536px; // Extra large
```

## 📦 Technologies

- **React 18.2** - UI library with concurrent rendering
- **TypeScript 4.9** - Type-safe JavaScript
- **Material-UI 5** - Professional component library
- **React Router 6** - Client-side routing
- **SCSS/Sass** - Enhanced CSS with variables and mixins
- **Create React App** - Development environment

## 🔧 Configuration Files

### `tsconfig.json`
TypeScript compiler options with strict mode enabled:
- `target: "es5"` - Compatible with older browsers
- `downlevelIteration: true` - Support for Set spreading
- `strict: true` - Enable all strict type checking
- `moduleResolution: "node"` - Node-style module resolution

### `package.json`
Main dependencies and scripts. Key packages:
- `@mui/material` - Material-UI components
- `@mui/icons-material` - Material icons
- `react-router-dom` - Routing library
- `sass` - SCSS compiler (devDependency)

## 📄 Documentation

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Detailed architecture and design patterns
- **[SCSS_MIGRATION.md](./SCSS_MIGRATION.md)** - SCSS migration guide and mixin library

## 🌐 Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Profile | Main portfolio/profile page |
| `/blogs` | Blogs | Blog listing with filtering |
| `/projects` | Projects | (Placeholder) Project showcase |
| `/connect` | Connect | (Placeholder) Contact information |

## 💡 Usage Examples

### Using SCSS Variables
```scss
@import '../../styles/variables';

.card {
  background: $light;
  padding: $spacing-lg;
  color: $text-dark;
  border: 1px solid $border-light;
}
```

### Using SCSS Mixins
```scss
.flexContainer {
  @include flex-center;
  gap: $spacing-md;
}

.title {
  @include line-clamp(2);
  font-size: $font-size-xl;
}

.hoverCard {
  @include transition(all, 0.3s);
  &:hover {
    @include hover-lift;
  }
}
```

### Creating a Component
```tsx
import React from 'react';
import { Box, Typography } from '../components/MaterialUI';
import styles from './MyComponent.module.scss';

const MyComponent: React.FC = () => {
  return (
    <Box className={styles.container}>
      <Typography variant="h2">Hello World</Typography>
    </Box>
  );
};

export default MyComponent;
```

## 🚀 Deployment

The project is ready to deploy on any static hosting service:

- **Vercel** - `vercel deploy`
- **Netlify** - Connect GitHub and auto-deploy
- **GitHub Pages** - Add `homepage` to package.json
- **AWS S3 + CloudFront** - Standard static hosting

After running `npm run build`, the `build/` folder is ready for deployment.

## 📝 Git Workflow

```bash
# Clone and setup
git clone https://github.com/vardhanguraza/portfolio-blog.git
cd portfolio-blog
npm install

# Create feature branch
git checkout -b feature/my-feature

# Make changes and commit
git add .
git commit -m "feat: description of changes"

# Push to GitHub
git push origin feature/my-feature

# Create Pull Request on GitHub
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Material-UI Documentation](https://mui.com)
- [SCSS Documentation](https://sass-lang.com/documentation)
- [React Router Documentation](https://reactrouter.com)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Vardhan Guraza**
- GitHub: [@vardhanguraza](https://github.com/vardhanguraza)
- Portfolio: [Your Portfolio URL]

---

**Last Updated**: November 2025
**Status**: Active Development
