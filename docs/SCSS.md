# SCSS Documentation

The **bttn** SCSS library is a modern, flexible, and lightweight button styling system built with a **CSS Variable First** architecture. It uses a centralized Factory Pattern to ensure consistency across all button variants while allowing for powerful runtime customization.

## 🚀 Installation

```bash
npm install bttn --save-dev
```

## 🛠️ Usage

### 1. Basic Import

Import the library into your main SCSS file:

```scss
@import 'node_modules/bttn/src/scss/bttn/import';
```

### 2. Using Mixins (Recommended)

Mixins provide the most flexibility and allow you to apply button styles to any selector.

```scss
.my-button {
  @include bttn($theme: 'primary', $size: 'lg');
}

.my-outline-button {
  @include bttn-stroke($theme: 'success', $size: 'md');
}
```

### 3. Using Pre-built Classes

If you prefer using classes directly in your HTML:

```html
<button class="bttn bttn-primary bttn-lg">Solid Button</button>
<button class="bttn-stroke bttn-success">Stroke Button</button>
<button class="bttn-pill bttn-warning">Pill Button</button>
```

---

## 🎨 CSS Variables (Runtime Theming)

Since v1.2.0, **bttn** is powered by CSS Custom Properties. This allows you to change the look and feel of your buttons at runtime without recompiling SCSS.

### Global Overrides

You can override default settings globally by targeting the `:root`:

```css
:root {
  --bttn-border-radius: 12px;
  --bttn-font-family: 'Inter', sans-serif;
  --bttn-transition-duration: 0.2s;
}
```

### Instance Overrides

You can also override variables for a specific button or container:

```css
.special-button {
  --bttn-bg: #ff00ff;
  --bttn-color: #ffffff;
  --bttn-border: #ff00ff;
}
```

### Available Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `--bttn-font-family` | Font family for all buttons | Helvetica Neue... |
| `--bttn-font-weight` | Font weight | normal |
| `--bttn-border-width` | Border thickness | 1px |
| `--bttn-border-radius` | Corner roundness | 0 |
| `--bttn-transition-duration` | Hover animation speed | 0.3s |
| `--bttn-bg` | Background color | (Theme dependent) |
| `--bttn-color` | Text color | (Theme dependent) |

---

## 📐 Sizing System

**bttn** includes a robust sizing system that scales padding, font-size, and line-height together.

| Size | Mixin Parameter | CSS Class |
|------|-----------------|-----------|
| Small | `sm` | `.bttn-sm` |
| Medium | `md` (default) | `.bttn-md` |
| Large | `lg` | `.bttn-lg` |
| Extra Large | `xl` | `.bttn-xl` |
| None | `none` | `.bttn-none` |

---

## 🎭 Themes

The library comes with several modern, pre-defined themes:

- **Standard:** `primary`, `success`, `warning`, `danger`
- **Modern:** `neon`, `royal`, `ocean`, `carbon`, `glass`

```scss
// Example: Using a modern theme
.my-neon-button {
  @include bttn($theme: 'neon');
}
```

---

## 🧩 Factory Pattern & Custom Variants

The core of the library is the `bttn-factory` mixin. All button types (`bttn`, `bttn-stroke`, `bttn-pill`, etc.) are built using this factory.

### Creating a Custom Variant

You can create your own button variants by calling the factory directly:

```scss
@mixin my-custom-variant($theme: 'primary') {
  $map: map.get($map-bttn-themes, $theme);
  
  @include bttn-factory($map, (
    border-radius: 20px 0 20px 0,
    text-transform: lowercase,
    letter-spacing: 2px
  ));
}
```

---

## 📚 API Reference

### `bttn($theme, $size, $font-size, $block)`
The standard solid button mixin.

### `bttn-stroke($theme, $size, $font-size, $block)`
An outlined button variant.

### `bttn-ghost($theme, $size, $font-size, $block)`
A transparent button that fills on hover.

### `bttn-pill($theme, $size, $font-size, $block)`
A button with fully rounded corners.

### `bttn-surface($theme, $size, $font-size, $block)`
A minimalist button with no default padding.
