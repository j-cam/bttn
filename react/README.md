# @bttn/react

A lightweight React component library for bttn buttons. Zero runtime CSS overhead - just smart className composition.

## Installation

```bash
npm install @bttn/react
# or
yarn add @bttn/react
# or
pnpm add @bttn/react
```

## Usage

### Basic Setup

Import the CSS once in your app (typically in your root layout or `_app.tsx`):

```tsx
// app/layout.tsx (Next.js App Router)
import '@bttn/react/styles.css';

// or use the minified version
import '@bttn/react/styles.min.css';
```

### Using the Button Component

```tsx
import { Button } from '@bttn/react';

export default function MyComponent() {
  return (
    <div>
      {/* Default button */}
      <Button>Click me</Button>

      {/* Stroke variant */}
      <Button variant="stroke" size="lg">
        Large Stroke Button
      </Button>

      {/* Ghost variant */}
      <Button variant="ghost" size="sm">
        Small Ghost Button
      </Button>

      {/* With onClick handler */}
      <Button
        variant="stroke"
        onClick={() => console.log('Clicked!')}
      >
        Interactive Button
      </Button>

      {/* Custom className */}
      <Button className="my-custom-class">
        Custom Styled
      </Button>
    </div>
  );
}
```

## API Reference

### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'stroke' \| 'ghost' \| 'pill'` | `'default'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Button size |
| `block` | `boolean` | `false` | Whether button should take full width |
| `className` | `string` | `''` | Additional CSS classes to apply |
| `children` | `ReactNode` | - | Button content |

All standard HTML button attributes are also supported (`onClick`, `disabled`, `type`, etc.)

## Next.js Integration

### App Router (Next.js 13+)

```tsx
// app/layout.tsx
import '@bttn/react/styles.css';
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
import '@bttn/react/styles.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

## TypeScript

This package is written in TypeScript and includes type definitions out of the box.

```tsx
import { Button, ButtonProps } from '@bttn/react';

const MyButton: React.FC<{ customProp: string }> = ({ customProp }) => {
  const buttonProps: ButtonProps = {
    variant: 'stroke',
    size: 'lg',
    children: customProp,
  };

  return <Button {...buttonProps} />;
};
```

## License

MIT
