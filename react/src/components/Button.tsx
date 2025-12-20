import React from 'react';

export type ButtonVariant = 'default' | 'stroke' | 'ghost' | 'pill';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonTheme = 'default' | 'primary' | 'success' | 'warning' | 'danger';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button style variant */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Color theme (only applies to default and stroke variants) */
  theme?: ButtonTheme;
  /** Whether the button should take full width */
  block?: boolean;
  /** Custom className to merge with bttn classes */
  className?: string;
  /** Button content */
  children: React.ReactNode;
}

/**
 * Button component that applies bttn CSS classes
 * 
 * @example
 * ```tsx
 * import { Button } from '@bttn/react';
 * import '@bttn/react/styles.css';
 * 
 * <Button variant="stroke" size="lg" theme="primary">
 *   Click me
 * </Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'default',
      size = 'md',
      theme,
      block,
      className = '',
      children,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const classes = React.useMemo(() => {
      const classList: string[] = [];

      // Base class construction
      if (variant === 'default') {
        // Standard button: .bttn, .bttn-sm, .bttn-lg, .bttn-xl
        if (size === 'md') {
          classList.push('bttn');
        } else {
          classList.push(`bttn-${size}`);
        }
      } else {
        // Variant buttons: .bttn-stroke, .bttn-stroke-sm, etc.
        const baseClass = `bttn-${variant}`;
        if (size === 'md') {
          classList.push(baseClass);
        } else {
          classList.push(`${baseClass}-${size}`);
        }
      }

      // Block modifier (if you add this to your CSS)
      if (block) {
        classList.push('bttn-block');
      }

      // Custom className
      if (className) {
        classList.push(className);
      }

      return classList.join(' ');
    }, [variant, size, block, className]);

    return (
      <button ref={ref} type={type} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
