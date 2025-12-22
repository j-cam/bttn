# @j-cam/bttn-react

A lightweight, polymorphic React component library for bttn buttons. Powered by a **CSS Variable First** architecture and a centralized SCSS engine.

## ✨ Key Features

- **🎨 CSS Variable First**: Fully themeable at runtime using CSS Custom Properties.
- **⚛️ Polymorphic**: Use the `as` prop to render as any element (button, a, Link, etc.).
- **✨ On-The-Fly Theming**: Pass a `customTheme` object for dynamic styling.
- **📏 Flexible Sizing**: sm, md, lg, xl, and 'none' for card-like behavior.
- **🔒 Scoped Styles**: Uses CSS Modules to prevent global style leakage.
- **⚛️ TypeScript**: Full type safety for variants, sizes, and themes.
- **🪶 Lightweight**: ~3KB total (JS + CSS).

## Installation

```bash
npm install @j-cam/bttn-react @j-cam/bttn
# or
yarn add @j-cam/bttn-react @j-cam/bttn
```

## Usage

### 1. Import Styles
Import the CSS in your root file (e.g., `App.tsx` or `_app.tsx`):

```javascript
import '@j-cam/bttn/styles.css';
```

### 2. Use the Component
```tsx
import { Button } from '@j-cam/bttn-react';
```

## Usage

### Basic Setup

Import the component and the required CSS file:

```tsx
import { Button } from '@j-cam/bttn-react';
import '@j-cam/bttn/styles.css'; // Required CSS import

export default function MyComponent() {
  return (
    <div>
      <Button variant="stroke" size="lg">
        Large Stroke Button
      </Button>

      {/* Polymorphic: Renders as an anchor */}
      <Button href="/about" variant="ghost">
        Learn More
      </Button>

      {/* Custom Theme: On-the-fly styling */}
      <Button 
        customTheme={{ bg: '#1d89ff', color: '#fff' }}
        variant="pill"
      >
        Custom Color
      </Button>
    </div>
  );
}
```

## Component Architecture

The React package is built as a thin wrapper around the core SCSS library:

```
Button/
├── Button.tsx              # Polymorphic component logic
├── Button.module.scss      # Consumes root SCSS via @import "bttn"
└── index.ts                # Clean exports
```

The build process uses `tsup` and `esbuild-sass-plugin` to resolve `@import "bttn"` to the root `src/scss` folder, ensuring a single source of truth for all styles.

## API Reference

### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'stroke' \| 'ghost' \| 'pill' \| 'surface'` | `'default'` | Button style variant |
| `theme` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'neon' \| 'royal' \| 'ocean' \| 'carbon' \| 'glass'` | `'default'` | Color theme |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'none'` | `'md'` | Button size |
| `customTheme` | `CustomTheme` | `undefined` | Object for runtime color overrides |
| `as` | `any` | `button \| a` | The HTML element or component to render as |
| `block` | `boolean` | `false` | Whether button should take full width |
| `href` | `string` | `undefined` | Standard anchor href |
| `children` | `ReactNode` | **Required** | Button content |

### CustomTheme Interface

```typescript
interface CustomTheme {
  bg?: string;
  bgActive?: string;
  border?: string;
  borderActive?: string;
  color?: string;
  colorActive?: string;
  icon?: string;
  iconActive?: string;
}
```
| `className` | `string` | `''` | Additional CSS classes to apply |
| `href` | `string` | - | If provided, renders as `<a>` element instead of `<button>` |
| `as` | `keyof JSX.IntrinsicElements` | - | Explicitly override the rendered element (advanced usage) |
| `children` | `ReactNode` | - | Button content |

All standard HTML attributes are supported based on the rendered element type.

## Next.js Integration

### App Router (Next.js 13+)

```tsx
// app/layout.tsx
import '@j-cam/bttn/styles.css';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### Pages Router (Next.js 12 and below)

```tsx
// pages/_app.tsx
import '@j-cam/bttn/styles.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

## TypeScript

This package is written in TypeScript and includes type definitions out of the box.

```tsx
import { Button, ButtonProps } from '@j-cam/bttn-react';

const MyButton: React.FC<{ customProp: string }> = ({ customProp }) => {
  const buttonProps: ButtonProps = {
    variant: 'stroke',
    size: 'lg',
    children: customProp,
  };

  return <Button {...buttonProps} />;
};
```

## Development

### Running Storybook

This project uses Storybook for component development and documentation.

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start Storybook dev server
npm run storybook
```

Storybook will open at http://localhost:6006/

### View Live Demo

See all component variants in action: https://j-cam.github.io/bttn/

### Building Storybook

```bash
npm run build-storybook
```

This creates a static build in `storybook-static/` that can be deployed anywhere.

## License

MIT
