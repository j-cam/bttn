# bttn

> A modern button styling library for SCSS and React

[![npm version](https://img.shields.io/npm/v/bttn.svg)](https://www.npmjs.com/package/bttn)
[![bttn-react version](https://img.shields.io/npm/v/bttn-react.svg)](https://www.npmjs.com/package/bttn-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**bttn** provides consistent, themeable button styling for web applications. Available as both SCSS mixins and React components.

**[📚 View Live Demo →](https://j-cam.github.io/bttn/)**

## 📦 Packages

### SCSS Library (Core)
Use SCSS mixins to create custom button styles in your stylesheets.

**Features:**
- 🎨 Multiple button variants (default, stroke, ghost, pill, surface)
- 📏 Flexible sizing system (sm, md, lg, xl, none)
- 🎭 Customizable themes (primary, success, warning, danger, neon, royal, ocean, carbon, glass)
- 🧩 Mixin-based or pre-built CSS classes
- Zero runtime dependencies

[View SCSS Documentation →](./docs/SCSS.md)

### React Components (`bttn-react`)
Lightweight React components with zero runtime CSS overhead.

**Features:**
- ⚛️ TypeScript support
- 🪶 Tiny bundle (~2KB gzipped)
- 🎯 Framework-agnostic CSS
- ✨ Works with Next.js, Vite, and any React app

[View React Documentation →](./react/README.md) | [Next.js Examples →](./react/NEXTJS_EXAMPLE.md)

## � Quick Start

### For React Projects

```bash
npm install bttn-react
```

```tsx
import { Button } from 'bttn-react';
import 'bttn-react/styles.css';

function App() {
  return <Button variant="stroke" size="lg">Click me</Button>;
}
```

### For SCSS Projects

```bash
npm install bttn --save-dev
```

```scss
@import 'node_modules/bttn/src/scss/bttn/import';

.my-button {
  @include bttn($theme: 'primary', $size: 'lg');
}
```

```html
<!-- Standard buttons -->
<button class="bttn">Default Button</button>
<button class="bttn-sm">Small Button</button>
<button class="bttn-lg">Large Button</button>
<button class="bttn-xl">Extra Large Button</button>

<!-- Stroke (outlined) buttons -->
<button class="bttn-stroke">Stroke Button</button>
<button class="bttn-stroke-sm">Small Stroke</button>

<!-- Ghost (transparent) buttons -->
<button class="bttn-ghost">Ghost Button</button>
<button class="bttn-ghost-sm">Small Ghost</button>
```

### Using Mixins

For more flexibility, use the mixins directly in your SCSS:

```scss
.my-custom-button {
  @include bttn($size: lg, $theme: 'primary');
}

.my-outline-button {
  @include bttn-stroke($size: sm, $theme: 'secondary');
}

.my-ghost-button {
  @include bttn-ghost($theme: 'accent');
}

.my-pill-button {
  @include bttn-pill($size: lg);
}
```

## 🎨 Button Types

### Standard Buttons (`bttn`)
Solid background buttons with hover effects.

### Stroke Buttons (`bttn-stroke`)
Outlined buttons with transparent backgrounds.

### Ghost Buttons (`bttn-ghost`)
Transparent buttons that fill on hover.

### Pill Buttons (`bttn-pill`)
Buttons with fully rounded corners.

## 📐 Sizes

bttn comes with four predefined sizes:

- `sm` - Small buttons
- `default` - Standard size (used when no size specified)
- `lg` - Large buttons
- `xl` - Extra large buttons

You can also define custom sizes by overriding the size variables.

## ⚙️ Configuration

### Customizing Default Settings

Override the default settings before importing bttn:

```scss
// Your custom settings
$bttn-namespace: 'btn';  // Change class prefix from .bttn to .btn
$bttn-font-family: 'Inter', sans-serif;
$bttn-font-size-base: 14px;
$bttn-border-radius: 4px;
$bttn-transition-duration: 0.2s;

// Import bttn
@import 'node_modules/bttn/src/scss/bttn/import';
```

### Available Configuration Variables

```scss
// Namespace for CSS classes
$bttn-namespace: "bttn" !default;

// Typography
$bttn-font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !default;
$bttn-font-size-base: 16px !default;
$bttn-font-weight: normal !default;
$bttn-letter-spacing: normal !default;
$bttn-text-transform: uppercase !default;

// Display
$bttn-display: inline-block !default;

// Border
$bttn-border-width: 1px !default;
$bttn-border-style: solid !default;
$bttn-border-radius: 0 !default;

// Animation
$bttn-transition-duration: .3s !default;

// Sizing - Small
$bttn-padding-sm: 9px 13px !default;
$bttn-font-size-sm: bttn-rem(12px) !default;
$bttn-line-height-sm: bttn-lh(12px, 14px) !default;

// Sizing - Default
$bttn-padding: 16px 20px !default;
$bttn-font-size: bttn-rem(15px) !default;
$bttn-line-height: bttn-lh(15px, 17px) !default;

// Sizing - Large
$bttn-padding-lg: 23px 27px !default;
$bttn-font-size-lg: bttn-rem(16px) !default;
$bttn-line-height-lg: bttn-lh(16px, 18px) !default;

// Sizing - Extra Large
$bttn-padding-xl: 30px 34px !default;
$bttn-font-size-xl: bttn-rem(18px) !default;
$bttn-line-height-xl: bttn-lh(18px, 20px) !default;
```

### Creating Custom Themes

Define your own color themes:

```scss
// Add to $map-bttn-themes before importing
$map-bttn-themes: (
  primary: (
    bg-color: #007bff,
    bg-color-active: #0056b3,
    font-color: #ffffff,
    font-color-active: #ffffff,
  ),
  secondary: (
    bg-color: #6c757d,
    bg-color-active: #545b62,
    font-color: #ffffff,
    font-color-active: #ffffff,
  ),
  success: (
    bg-color: #28a745,
    bg-color-active: #1e7e34,
    font-color: #ffffff,
    font-color-active: #ffffff,
  )
);

@import 'node_modules/bttn/src/scss/bttn/import';
```

## 🌐 Browser Support

bttn supports all modern browsers:

- Chrome >= 60
- Firefox ESR
- Edge >= 79
- Safari >= 12
- iOS Safari >= 12
- Android >= 6

## 📚 API Reference

### Mixins

#### `bttn($size, $font-size, $theme)`
Creates a standard solid button.

**Parameters:**
- `$size` (string): Button size - `sm`, `lg`, `xl`, or omit for default
- `$font-size` (string): Font size variant - matches `$size` values
- `$theme` (string): Theme name from `$map-bttn-themes`

#### `bttn-stroke($size, $font-size, $theme)`
Creates an outlined/stroke button.

#### `bttn-ghost($size, $font-size, $theme)`
Creates a ghost/transparent button.

#### `bttn-pill($size, $font-size, $theme)`
Creates a pill-shaped button with rounded corners.

## 🏗️ Development

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Setup

```bash
# Clone the repository
git clone https://github.com/j-cam/bttn.git
cd bttn

# Install dependencies
npm install

# Build the project
npm run build

# Watch for changes during development
npm run dev

# Lint SCSS files
npm run lint:scss

# Format code
npm run format
```

### Project Structure

```
bttn/
├── src/
│   └── scss/
│       └── bttn/
│           ├── bttn-themes/        # Color theme definitions
│           ├── bttn-types/         # Button type mixins
│           ├── bttn-utils/         # Utility mixins and functions
│           ├── lib/                # Core functions
│           ├── _bttn-settings.scss # Configuration variables
│           ├── _bttn-classes.scss  # CSS class definitions
│           └── import.scss         # Main import file
├── docs/                           # Documentation and examples
├── package.json
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Jamie Campbell**

- GitHub: [@j-cam](https://github.com/j-cam)

## 🙏 Acknowledgments

- Inspired by modern CSS frameworks and button libraries
- Built with SCSS best practices in mind
- Thanks to all contributors who have helped improve this library

## 📮 Support

- 📫 [Report Issues](https://github.com/j-cam/bttn/issues)
- 💬 [Discussions](https://github.com/j-cam/bttn/discussions)

---

Made with ❤️ by Jamie Campbell
