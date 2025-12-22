import React from 'react';
import styles from './Button.module.scss';

export type ButtonVariant = 'default' | 'stroke' | 'ghost' | 'pill' | 'surface';
/**
 * Button size options.
 * 'none' removes internal padding, useful for card-like behavior or custom layouts.
 */
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | 'none';
export type ButtonTheme = 'default' | 'primary' | 'success' | 'warning' | 'danger';

/**
 * Props for the Button component.
 * Extends standard HTML attributes but omits 'size' to avoid conflict with our custom size prop.
 */
export interface ButtonProps extends Omit<React.AllHTMLAttributes<HTMLElement>, 'size'> {
  /** 
   * Visual style variant.
   * @default 'default'
   */
  variant?: ButtonVariant;
  /** 
   * Button size. 
   * @default 'md'
   */
  size?: ButtonSize;
  /** 
   * Color theme. 
   * Note: Only applies to 'default' and 'stroke' variants in the current SCSS implementation.
   */
  theme?: ButtonTheme;
  /** 
   * If true, the button will take up the full width of its container.
   * @default false
   */
  block?: boolean;
  /** 
   * If provided, the component will render as an anchor (<a>) tag.
   */
  href?: string;
  /** 
   * The content to be rendered inside the button.
   */
  children: React.ReactNode;
  /** 
   * Explicitly override the rendered HTML element.
   * If not provided, defaults to 'a' if href is present, otherwise 'button'.
   */
  as?: any;
}

/**
 * Button component with encapsulated styles
 * No external CSS import needed - styles are bundled with the component
 *
 * @example
 * ```tsx
 * import { Button } from '@bttn/react';
 *
 * // Regular button
 * <Button variant="stroke" size="lg">
 *   Click me
 * </Button>
 *
 * // Link styled as button
 * <Button href="/link" variant="ghost">
 *   Link styled as button
 * </Button>
 *
 * // Custom element (advanced)
 * <Button as="div" variant="surface">
 *   Custom element
 * </Button>
 * ```
 */
export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (
    {
      variant = 'default',
      size = 'md',
      theme,
      block,
      className = '',
      children,
      href,
      as,
      ...props
    },
    ref
  ) => {
    /**
     * Memoized class computation to prevent unnecessary recalculations.
     */
    const classes = React.useMemo(() => {
      const classList: string[] = [styles.button];

      // Add variant class (e.g., .default, .stroke, .ghost, .pill, .surface)
      if (variant) classList.push(styles[variant]);

      // Add size class (e.g., .sm, .md, .lg, .xl)
      // We skip 'none' as it's intended to remove standard button padding
      if (size && size !== 'none') {
        classList.push(styles[size]);
      }

      // Apply block modifier for full-width buttons
      if (block) {
        classList.push(styles.block);
      }

      // Merge with any user-provided className
      if (className) {
        classList.push(className);
      }

      return classList.join(' ');
    }, [variant, size, block, className]);

    /**
     * Determine the underlying HTML element.
     * 1. Use 'as' if explicitly provided.
     * 2. Use 'a' if 'href' is present.
     * 3. Default to 'button'.
     */
    const Element = (as || (href ? 'a' : 'button')) as any;

    /**
     * Prepare props for the underlying element.
     * We handle 'href' and 'type' specifically based on the element type.
     */
    const elementProps: any = {
      ...props,
      className: classes,
    };

    // If it's an anchor, ensure href is passed
    if (Element === 'a' && href) {
      elementProps.href = href;
    }

    // If it's a button, default type to 'button' if not specified
    if (Element === 'button' && !props.type) {
      elementProps.type = 'button';
    }

    return (
      <Element ref={ref} {...elementProps}>
        {children}
      </Element>
    );
  }
);

Button.displayName = 'Button';