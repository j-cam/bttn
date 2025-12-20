# Example: Using @bttn/react in Next.js

## Quick Start

### 1. Install the package

```bash
npm install @bttn/react
```

### 2. Import the CSS in your root layout

**App Router (Next.js 13+)**

```tsx
// app/layout.tsx
import '@bttn/react/styles.css';

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

**Pages Router (Next.js 12 and below)**

```tsx
// pages/_app.tsx
import '@bttn/react/styles.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

### 3. Use the Button component

```tsx
// app/page.tsx or pages/index.tsx
import { Button } from '@bttn/react';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl mb-4">Button Examples</h1>
      
      <div className="space-y-4">
        {/* Default variants */}
        <div className="flex gap-2">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>

        {/* Stroke variants */}
        <div className="flex gap-2">
          <Button variant="stroke" size="sm">Small Stroke</Button>
          <Button variant="stroke">Medium Stroke</Button>
          <Button variant="stroke" size="lg">Large Stroke</Button>
        </div>

        {/* Ghost variants */}
        <div className="flex gap-2">
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="ghost" size="lg">Large Ghost</Button>
        </div>

        {/* With onClick */}
        <Button 
          variant="stroke"
          onClick={() => alert('Clicked!')}
        >
          Click Me
        </Button>

        {/* Disabled state */}
        <Button disabled>Disabled Button</Button>
      </div>
    </main>
  );
}
```

## Using with Tailwind CSS

The buttons work great alongside Tailwind. You can combine bttn button styles with Tailwind utility classes:

```tsx
import { Button } from '@bttn/react';

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Button className="w-full">Full Width Button</Button>
      <Button className="mx-auto">Centered Button</Button>
      <Button className="shadow-lg hover:shadow-xl transition-shadow">
        Enhanced Hover Effect
      </Button>
    </div>
  );
}
```

## Server Components (RSC)

The Button component is client-safe but also works in Server Components by default since it doesn't use any React hooks except `useMemo` and `forwardRef`:

```tsx
// app/page.tsx (Server Component)
import { Button } from '@bttn/react';

export default function ServerPage() {
  return (
    <div>
      <Button>This works in a Server Component</Button>
      
      {/* But you need a Client Component for interactivity */}
      <ClientButton />
    </div>
  );
}
```

```tsx
// components/ClientButton.tsx
'use client';

import { Button } from '@bttn/react';

export function ClientButton() {
  return (
    <Button onClick={() => console.log('Clicked!')}>
      Interactive Button
    </Button>
  );
}
```

## TypeScript Support

Full TypeScript support is included:

```tsx
import { Button, ButtonProps } from '@bttn/react';
import { FC } from 'react';

interface MyButtonProps {
  label: string;
  variant?: ButtonProps['variant'];
}

const MyButton: FC<MyButtonProps> = ({ label, variant = 'default' }) => {
  return (
    <Button variant={variant} size="lg">
      {label}
    </Button>
  );
};
```

## Performance

- **Zero runtime CSS**: All styles are pre-compiled CSS, no runtime overhead
- **Tree-shakeable**: Only imports what you use
- **Tiny bundle**: ~2KB gzipped for the JS, CSS is cached separately
- **CSS is cacheable**: The stylesheet can be cached by the browser independently
