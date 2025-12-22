# Using bttn-react with Next.js

**bttn-react** is fully compatible with Next.js (both App Router and Pages Router). Since the components use CSS Modules and are marked with `"use client"`, they work seamlessly in modern Next.js environments.

## 🛠️ Setup

### 1. Install the package

```bash
npm install bttn-react
```

### 2. Global Styles

Import the core CSS in your root layout or `_app.tsx`.

**App Router (`app/layout.tsx`):**

```tsx
import 'bttn-react/styles.css';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

## 🚀 Usage Examples

### Basic Button

```tsx
import { Button } from 'bttn-react';

export default function Page() {
  return (
    <Button variant="stroke" theme="primary">
      Next.js Button
    </Button>
  );
}
```

### Using with `next/link`

The `Button` component is polymorphic, making it easy to integrate with the Next.js `Link` component for client-side navigation.

```tsx
import { Button } from 'bttn-react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <Button as={Link} href="/dashboard" variant="pill" theme="royal">
      Go to Dashboard
    </Button>
  );
}
```

### Server Components vs Client Components

The `Button` component includes the `"use client"` directive, so you can safely import and use it directly inside your Server Components. Next.js will handle the boundary automatically.

### Customizing via CSS Variables

You can customize the buttons globally in your `globals.css`:

```css
/* app/globals.css */
:root {
  --bttn-font-family: var(--font-inter); /* Use Next.js font variables */
  --bttn-border-radius: 0.5rem;
}
```

## 💡 Pro Tip: On-The-Fly Themes

Use the `customTheme` prop to match your brand colors dynamically:

```tsx
<Button 
  customTheme={{ 
    bg: '#0070f3', 
    color: '#fff',
    border: '#0070f3' 
  }}
>
  Vercel Blue Button
</Button>
```
