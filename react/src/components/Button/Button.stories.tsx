import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'stroke', 'ghost', 'pill', 'surface'],
      description: 'Button style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'none'],
      description: 'Button size - "none" removes padding for card-like behavior',
    },
    as: {
      control: 'select',
      options: ['button', 'a', 'div', 'span'],
      description: 'Explicitly override the rendered element (advanced usage)',
    },
    href: {
      control: 'text',
      description: 'If provided, renders as an anchor element instead of button',
    },
    block: {
      control: 'boolean',
      description: 'Whether the button should take full width',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default button
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'md',
  },
};

// Stroke variant
export const Stroke: Story = {
  args: {
    children: 'Stroke Button',
    variant: 'stroke',
    size: 'md',
  },
};

// Ghost variant
export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
    size: 'md',
  },
};

// Pill variant
export const Pill: Story = {
  args: {
    children: 'Pill Button',
    variant: 'pill',
    size: 'md',
  },
};

// Small size
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

// Large size
export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

// Extra Large
export const ExtraLarge: Story = {
  args: {
    children: 'Extra Large Button',
    size: 'xl',
  },
};

// Disabled
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

// Block (full width)
export const Block: Story = {
  args: {
    children: 'Block Button',
    block: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// As anchor link
export const AsLink: Story = {
  args: {
    children: 'Link styled as Button',
    href: '#',
    variant: 'stroke',
  },
};

// Surface variant (subtle background)
export const Surface: Story = {
  args: {
    children: 'Surface Button',
    variant: 'surface',
  },
};

// Surface as a Card
export const SurfaceCard: Story = {
  args: {
    variant: 'surface',
    size: 'none',
    as: 'div',
    children: (
      <div style={{ padding: '20px', textAlign: 'left' }}>
        <h3 style={{ marginTop: 0 }}>Card Title</h3>
        <p>This is a surface variant used as a card container with size="none".</p>
        <Button variant="pill" size="sm">Action</Button>
      </div>
    ),
  },
};

// No padding size (card-like behavior)
export const NoPadding: Story = {
  args: {
    children: 'No Padding Button',
    size: 'none',
    variant: 'ghost',
  },
};

// Custom element (advanced usage)
export const CustomElement: Story = {
  args: {
    children: 'Custom Div Element',
    as: 'div',
    variant: 'surface',
    onClick: () => alert('Clicked!'),
  },
};

// Size None
export const SizeNone: Story = {
  args: {
    children: 'No Padding Button',
    size: 'none',
    variant: 'stroke',
  },
};

// Themes
export const Themes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button theme="primary">Primary</Button>
        <Button theme="success">Success</Button>
        <Button theme="warning">Warning</Button>
        <Button theme="danger">Danger</Button>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button variant="stroke" theme="primary">Primary Stroke</Button>
        <Button variant="stroke" theme="success">Success Stroke</Button>
        <Button variant="stroke" theme="warning">Warning Stroke</Button>
        <Button variant="stroke" theme="danger">Danger Stroke</Button>
      </div>
    </div>
  ),
};
