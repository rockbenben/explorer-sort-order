# Explorer Sort Order

A lightweight VS Code extension to quickly toggle file sorting in the Explorer panel. Supports all 6 sort modes with a configurable quick toggle, status bar indicator, and full selector.

![](https://img.newzone.top/2025-03-15-12-56-36.png?imageMogr2/format/webp)

一键切换资源管理器中的文件排序方式。支持全部 6 种排序模式，可通过快捷键 `Ctrl+F10`（Mac: `Cmd+F10`）、工具栏按钮或状态栏快速切换。默认在"按名称"和"按修改时间"之间切换，也可在设置中自定义切换的两种模式。通过命令面板运行 `Select Explorer Sort Order` 可从下拉列表中选择任意排序模式。

## Features

- **Quick Toggle:** Switch between two sort modes with `Ctrl+F10` / `Cmd+F10` or the toolbar button
- **Status Bar Indicator:** Shows the current sort order at a glance, click to toggle
- **All 6 Sort Modes:** By Name, By Modified, By Type, Files First, Mixed, Folders Nests Files
- **Full Selector:** Use `Select Explorer Sort Order` command to pick any mode from a dropdown
- **Configurable Toggle Pair:** Choose which two modes to toggle between in settings
- **Workspace Aware:** Respects workspace vs global settings scope

## Usage

- Press `Ctrl+F10` (Windows/Linux) or `Cmd+F10` (Mac) to quick toggle
- Click the status bar item (bottom right) to toggle
- Click the toolbar button in the Explorer panel title bar
- Run `Select Explorer Sort Order` from the Command Palette to choose from all modes

## Sort Modes

| Mode                | Description                               |
| ------------------- | ----------------------------------------- |
| `default`           | By name, folders first                    |
| `modified`          | By last modified date, descending         |
| `type`              | Group by extension type, then by name     |
| `filesFirst`        | Files before folders, by name             |
| `mixed`             | Files and folders mixed together, by name |
| `foldersNestsFiles` | Nested files displayed before other files |

## Extension Settings

| Setting                     | Default    | Description                       |
| --------------------------- | ---------- | --------------------------------- |
| `explorerSortOrder.toggleA` | `default`  | First sort mode for quick toggle  |
| `explorerSortOrder.toggleB` | `modified` | Second sort mode for quick toggle |

## Keyboard Shortcuts

- **Windows/Linux:** `Ctrl+F10`
- **Mac:** `Cmd+F10`

## Release Notes

### 1.0.0

- Support all 6 explorer sort modes
- Add `Select Explorer Sort Order` command with QuickPick selector
- Add configurable toggle pair (`explorerSortOrder.toggleA` / `toggleB`)
- Add status bar indicator with click-to-toggle
- Fix workspace settings being overwritten by global scope
- Switch to esbuild bundling for smaller package size

### 0.0.6

- Add toolbar button for easier access

### 0.0.5

- Add default hotkey support for Mac
- Improve user feedback with more descriptive messages

### 0.0.1

- Initial release with keyboard shortcut functionality
