# Explorer Sort Order

A lightweight VS Code extension that lets you instantly switch file sorting in the Explorer panel between 'By Name' and 'By Last Modified' using either the `Ctrl+F10` keyboard shortcut or a convenient toolbar button.

![](https://img.newzone.top/2025-03-15-12-56-36.png?imageMogr2/format/webp)

可通过 `Ctrl+F10`（Windows/Linux）或 `Cmd+F10`（Mac）快捷键或工具栏按钮，一键切换资源管理器中的文件排序方式，在"按名称"和"按最后修改时间"之间快速切换。

## Features

- **One-Click Toggle:** Switch sorting methods with either a keyboard shortcut or the Explorer toolbar button
- **Visual Feedback:** Receive a notification confirming your current sort order
- **Zero Configuration:** Works immediately after installation with no setup required
- **Customizable:** Keep your preferred sort order between VS Code sessions

## Usage

- Press `Ctrl+F10` (Windows/Linux) or `Cmd+F10` (Mac) to toggle sorting
- Click the sort toggle button in the Explorer panel's title bar
- Receive instant visual confirmation of the current sort order

## Extension Settings

This extension uses VS Code's built-in settings:

- `explorer.sortOrder`: Controls the default sort order ('modified' or 'default')

## Keyboard Shortcuts

- **Windows/Linux:** `Ctrl+F10`
- **Mac:** `Cmd+F10`

## Release Notes

### 0.0.6

- Added toolbar button for easier access

### 0.0.5

- feat: add default hotkey support for Mac
- refactor: improve user feedback with more descriptive messages

### 0.0.1

- Initial release with keyboard shortcut functionality
