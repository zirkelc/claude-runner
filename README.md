# Claude Runner

A simple VSCode extension that adds a context menu item to quickly open a terminal and run Claude Code in any folder.

## Usage

1. Right-click on any folder in the VSCode Explorer
2. Select "Run Claude" from the context menu
3. A new terminal opens with the Claude icon and automatically runs `claude` in that folder

## Requirements

- VSCode 1.74.0 or higher
- [Claude Code CLI](https://docs.anthropic.com/en/docs/claude-code) installed and accessible via `claude` command

## Installation

### From GitHub Releases

1. Download the latest `.vsix` file from [GitHub Releases](https://github.com/zirke/claude-runner/releases)
2. Open VSCode
3. Open Command Palette (Ctrl+Shift+P)
4. Type "Extensions: Install from VSIX..."
5. Select the downloaded `.vsix` file

### Manual Installation

```bash
# Clone the repository
git clone https://github.com/zirke/claude-runner.git
cd claude-runner

# Install dependencies
pnpm install

# Build the extension
pnpm run compile

# Package the extension
pnpm run package

# Install the generated .vsix file
code --install-extension claude-runner-1.0.0.vsix
```

## Development

```bash
# Install dependencies
pnpm install

# Compile TypeScript
pnpm run compile

# Watch for changes
pnpm run watch

# Click "Debug: Run Extension" in the Debug View to launch Extension Development Host
```

## License

MIT

## Contributing

Pull requests are welcome! Please feel free to submit issues and enhancement requests.