# @j-cam/bttn

> A modern button styling library for SCSS and React

[![npm version](https://img.shields.io/npm/v/@j-cam/bttn.svg)](https://www.npmjs.com/package/@j-cam/bttn)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**bttn** provides consistent, themeable button styling for web applications. Available as both SCSS mixins and React components in a single, unified package.

**[📚 View Live Demo →](https://j-cam.github.io/bttn/?path=story/components-button--modern-themes)**

## ✨ Features

- 🎨 **CSS Variable First:** Fully themeable at runtime using CSS Custom Properties.
- ⚛️ **Polymorphic React Component:** Use the `as` prop to render as any element (button, a, Link, etc.).
- 🎭 **Multiple Variants:** default, stroke, ghost, pill, surface.
- 📏 **Flexible Sizing:** sm, md, lg, xl, none.
- 🌈 **Modern Themes:** primary, success, warning, danger, neon, royal, ocean, carbon, glass.
- ✨ **On-The-Fly Theming:** Pass a `customTheme` object to style buttons dynamically.
- 🧩 **Factory Pattern:** Centralized logic for consistent styling across all variants.
- 🚀 **Zero Redundancy:** React components consume the core SCSS engine directly.
- 🎯 **TypeScript:** Full type safety for variants, sizes, and themes.

## 📦 Installation

```bash
npm install @j-cam/bttn
```

## 🚀 Quick Start

### React Usage

```tsx
import { Button } from '@j-cam/bttn/react';
import '@j-cam/bttn/styles.css';

function App() {
  return (
    <Button variant="pill" color="primary">
      Click Me
    </Button>
  );
}
```

### SCSS Usage

```scss
@import "@j-cam/bttn";

.my-custom-button {
  @include bttn-pill($theme: 'primary');
}
```

[View SCSS Documentation →](./docs/SCSS.md) | [Next.js Examples →](./NEXTJS_EXAMPLE.md)

---

## 🎨 Variants & Themes

### Variants
- `default`: Solid background.
- `stroke`: Outlined with border.
- `ghost`: Transparent background, colored text.
- `pill`: Rounded corners.
- `surface`: Subtle background with border.

### Themes
- `primary`, `success`, `warning`, `danger`
- `neon`, `royal`, `ocean`, `carbon`, `glass`

## 🛠 Development

```bash
# Install dependencies
npm install

# Build everything (SCSS + React)
npm run build

# Run Storybook
npm run storybook
```

## 📄 License
MIT
