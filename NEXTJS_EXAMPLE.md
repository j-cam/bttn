# Using @j-cam/bttn with Next.js

This guide shows how to use the unified `@j-cam/bttn` package in a Next.js project (App Router).

## 1. Installation

```bash
npm install @j-cam/bttn
```

## 2. Global Styles

Import the CSS in your root `layout.tsx`:

```tsx
// app/layout.tsx
import "@j-cam/bttn/styles.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

## 3. Usage in Components

The `Button` component is marked with `"use client"`, so you can use it in both Client and Server components (it will hydrate correctly).

```tsx
// app/page.tsx
import { Button } from "@j-cam/bttn/react";

export default function Page() {
  return (
    <main>
      <h1>Welcome to bttn</h1>
      
      {/* Standard usage */}
      <Button variant="pill" color="primary">
        Get Started
      </Button>

      {/* Polymorphic: Renders as a Next.js Link */}
      <Button as="a" href="/docs" variant="ghost">
        Read Docs
      </Button>

      {/* Custom Theme */}
      <Button 
        variant="stroke"
        customTheme={{
          bg: '#7c3aed',
          color: '#fff'
        }}
      >
        Custom Purple
      </Button>
    </main>
  );
}
```

## 4. Overriding Variables Globally

Since the library uses CSS variables, you can override them in your global CSS:

```css
/* app/globals.css */
:root {
  --bttn-primary-bg: #ff00ff;
  --bttn-radius-pill: 4px; /* Make pills less round */
}
```
