# Contributing to bttn

First off, thank you for considering contributing to bttn! It's people like you that make bttn such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to see if the problem has already been reported. If it has and the issue is still open, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A Good Bug Report?

Bugs are tracked as [GitHub issues](https://github.com/j-cam/bttn/issues). Create an issue and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets.
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem.

### Suggesting Enhancements

Enhancement suggestions are also tracked as [GitHub issues](https://github.com/j-cam/bttn/issues).

#### How Do I Submit A Good Enhancement Suggestion?

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps** or mockups/wireframes.
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Explain why this enhancement would be useful** to most bttn users.

### Pull Requests

The process described here has several goals:

- Maintain bttn's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible bttn
- Enable a sustainable system for bttn's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. **Fork the repository** and create your branch from `master`.
2. **Follow the styleguides** described below.
3. **Test your changes** thoroughly.
4. **Update documentation** as needed.
5. **Ensure the test suite passes** (when available).
6. **Make sure your code lints** using the provided linting tools.
7. **Issue that pull request!**

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
    * 🎨 `:art:` when improving the format/structure of the code
    * 🐛 `:bug:` when fixing a bug
    * 🔥 `:fire:` when removing code or files
    * 📝 `:memo:` when writing docs
    * ✨ `:sparkles:` when adding a new feature
    * ♻️ `:recycle:` when refactoring code
    * 🎉 `:tada:` when starting a new project
    * ✅ `:white_check_mark:` when adding tests
    * 🔒 `:lock:` when fixing security issues
    * ⬆️ `:arrow_up:` when upgrading dependencies
    * ⬇️ `:arrow_down:` when downgrading dependencies

### SCSS Styleguide

* Use 2 spaces for indentation (no tabs)
* Use descriptive variable names
* Comment your code where necessary
* Follow the existing code structure
* Use `!default` flag for variables that should be overridable
* Keep selectors as shallow as possible
* Use mixins for reusable patterns
* Alphabetize properties when possible
* Use lowercase and hyphens for class names
* Add a space after `:` in property declarations
* Add a space before `{` in rule declarations
* Use hex color codes `#000` unless using `rgba()`
* Avoid unnecessary nesting (max 3 levels)
* Use single quotes for strings
* End all declarations with a semicolon

Example:

```scss
// Good
.bttn-primary {
  background-color: #007bff;
  border-radius: 4px;
  color: #ffffff;
  padding: 12px 24px;
  
  &:hover {
    background-color: #0056b3;
  }
}

// Bad
.bttn-primary{
    background-color:#007bff;border-radius:4px;
    color:#ffffff;
    .nested{
        .even-more-nested{
            .way-too-nested{
                .this-is-bad{
                    color: red;
                }
            }
        }
    }
}
```

### JavaScript Styleguide (if applicable)

* Use 2 spaces for indentation
* Use single quotes for strings
* Use meaningful variable names
* Add comments for complex logic
* Follow ES6+ best practices

### Documentation Styleguide

* Use [Markdown](https://guides.github.com/features/mastering-markdown/) for documentation
* Reference function/mixin names in backticks: `bttn()`
* Use code blocks with syntax highlighting
* Keep line length to 100 characters when possible
* Add examples for all documented features

## Project Structure

Understanding the project structure will help you contribute more effectively:

```
bttn/
├── src/
│   └── scss/
│       └── bttn/
│           ├── bttn-themes/        # Color theme definitions
│           ├── bttn-types/         # Button type mixins (bttn, stroke, ghost, pill)
│           ├── bttn-utils/         # Utility mixins and helper functions
│           ├── lib/                # Core library functions
│           ├── _bttn-settings.scss # Configuration variables
│           ├── _bttn-classes.scss  # CSS class implementations
│           └── import.scss         # Main entry point
├── docs/                           # Documentation site and examples
├── .github/                        # GitHub specific files (workflows, templates)
├── package.json                    # Package configuration
└── README.md                       # Main documentation
```

## Development Setup

1. Clone your fork of the repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/bttn.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. Make your changes and test them:
   ```bash
   npm run build
   npm run dev
   ```

5. Lint your code:
   ```bash
   npm run lint:scss
   ```

6. Format your code:
   ```bash
   npm run format
   ```

## Testing

Before submitting your pull request, make sure:

- [ ] Your code follows the styleguide
- [ ] You've tested your changes in multiple browsers
- [ ] You've updated documentation as needed
- [ ] Your code doesn't break existing functionality
- [ ] You've added examples if introducing new features

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

* `bug` - Issues that are bugs
* `enhancement` - Issues that are feature requests
* `documentation` - Issues or PRs related to documentation
* `good first issue` - Good for newcomers
* `help wanted` - Extra attention is needed
* `question` - Further information is requested
* `wontfix` - This will not be worked on

## Recognition

Contributors who submit valuable pull requests will be acknowledged in the project's documentation and release notes.

## Questions?

Feel free to open an issue with your question or contact the maintainers directly.

Thank you for contributing to bttn! 🎉
