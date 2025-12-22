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
  /** If provided, renders as an anchor element instead of button */
  href?: string;
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
 * 
 * <Button href="/link" variant="ghost">
 *   Link styled as button
 * </Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'default',
      size = 'md',
      theme,
      block,
      className = '',
      children,
      href,
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

    const commonProps = {
      className: classes,
      ...props
    };

    if (href) {
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} {...(commonProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} {...(commonProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
