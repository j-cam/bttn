# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- New `surface` variant for layout-first containers (cards, tiles).
- Modern color palettes: `neon`, `royal`, `ocean`, `carbon`.
- `glass` theme with glassmorphism treatment (backdrop-filter).
- `size="none"` option to remove internal padding for custom layouts.
- Centralized SCSS Factory Pattern for consistent interaction states and transitions.
- Storybook stories for new variants and modern themes.

### Changed
- **BREAKING (SCSS)**: Refactored core mixins to use a centralized Factory Pattern.
- **BREAKING (SCSS)**: Renamed `bttn-default` mixin to `bttn` for consistency.
- Updated React `Button` component to support new variants and themes.
- Improved React component logic to default `size="none"` for `surface` variant.

## [1.1.0] - 2025-12-22

### Added
- Polymorphic React `Button` component with `href` detection.
- Support for `as` prop to override rendered HTML element.
- Initial React component library implementation.
- Storybook integration for React components.

## [1.0.0] - Initial Release

### Added
- Core SCSS mixin library for button styling
- Multiple button types: standard, stroke, ghost, and pill
- Four size variants: sm, default, lg, xl
- Customizable themes and color schemes
- Utility mixins for base styles, hover effects, sizing, and theming
- Ready-to-use CSS classes
- Responsive and accessible button components
- BrowserSync for development
- Basic documentation

[Unreleased]: https://github.com/j-cam/bttn/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/j-cam/bttn/releases/tag/v1.0.0
