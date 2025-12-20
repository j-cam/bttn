import React from 'react';
import styles from './Button.module.scss';

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
 * Button component with encapsulated styles
 * No external CSS import needed - styles are bundled with the component
 * 
 * @example
 * ```tsx
 * import { Button } from '@bttn/react';
 * 
 * <Button variant="stroke" size="lg">
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
      const classList: string[] = [styles.button];

      // Add variant class
      classList.push(styles[variant]);

      // Add size class
      classList.push(styles[size]);

      // Block modifier
      if (block) {
        classList.push(styles.block);
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
