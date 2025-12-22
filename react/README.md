# bttn-react

A lightweight React component library for bttn buttons with **encapsulated CSS Modules**. Each component bundles its own styles - no separate CSS import needed!

## ✨ Key Features

- **🎨 Self-Contained**: Styles are bundled with each component
- **📦 Zero Config**: No need to import separate CSS files
- **🔒 Scoped Styles**: CSS Modules prevent style conflicts
- **⚛️ TypeScript**: Full type safety included
- **🪶 Lightweight**: ~3KB total (JS + CSS)
- **🎯 Encapsulated Architecture**: Each component contains its own SCSS source

## Installation

```bash
npm install bttn-react
# or
yarn add bttn-react
# or
pnpm add bttn-react
```

## Usage

### Basic Setup

**No CSS import needed!** Just import the component:

```tsx
import { Button } from 'bttn-react';

export default function MyComponent() {
  return (
    <div>
      {/* Styles are automatically included */}
      <Button>Click me</Button>
      
      {/* Different variants */}
      <Button variant="stroke" size="lg">
        Large Stroke Button
      </Button>

      {/* Ghost variant */}
      <Button variant="ghost" size="sm">
        Small Ghost Button
      </Button>

      {/* Link styled as button */}
      <Button href="/about" variant="stroke">
        Learn More
      </Button>

      {/* Surface variant for subtle backgrounds */}
      <Button variant="surface">
        Surface Button
      </Button>

      {/* No padding for card-like behavior */}
      <Button size="none" variant="ghost">
        Card-like Button
      </Button>

      {/* Custom element (advanced) */}
      <Button as="div" variant="pill" onClick={handleClick}>
        Custom Element
      </Button>
    </div>
  );
}
```

## Component Architecture

Each component follows this self-contained structure:

```
Button/
├── Button.tsx              # Component logic
├── Button.module.scss      # Component styles (CSS Modules)
├── index.ts                # Clean exports
└── styles/
    └── bttn/               # Full bttn SCSS source (for reference/customization)
```

The `styles/bttn/` folder contains the complete bttn SCSS library, allowing you to:
- Reference the original design system
- Create custom variants
- Understand the styling approach

## API Reference

### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'stroke' \| 'ghost' \| 'pill' \| 'surface'` | `'default'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'none'` | `'md'` | Button size - `'none'` removes padding for card-like behavior |
| `block` | `boolean` | `false` | Whether button should take full width |
| `className` | `string` | `''` | Additional CSS classes to apply |
| `href` | `string` | - | If provided, renders as `<a>` element instead of `<button>` |
| `as` | `keyof JSX.IntrinsicElements` | - | Explicitly override the rendered element (advanced usage) |
| `children` | `ReactNode` | - | Button content |

All standard HTML attributes are supported based on the rendered element type.

## Next.js Integration

### App Router (Next.js 13+)

```tsx
// app/layout.tsx
import 'bttn-react/styles.css';
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
import 'bttn-react/styles.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

## TypeScript

This package is written in TypeScript and includes type definitions out of the box.

```tsx
import { Button, ButtonProps } from 'bttn-react';

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
