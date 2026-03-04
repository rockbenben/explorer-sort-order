# Change Log

All notable changes to the "explorer-sort-order" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [1.0.0] - 2026-03-04

- feat: support all 6 explorer sort modes (default, modified, type, filesFirst, mixed, foldersNestsFiles)
- feat: add `Select Explorer Sort Order` command with QuickPick selector
- feat: add configurable toggle pair settings (`explorerSortOrder.toggleA` / `toggleB`)
- feat: add status bar indicator showing current sort order, click to toggle
- fix: workspace settings being overwritten by global scope
- fix: error messages displaying `[object Object]` instead of readable text
- refactor: switch to esbuild bundling for smaller package size

## [0.0.6] - 2025-03-15

- feat: add toggle button
- chore: update deps

## [0.0.5] - 2025-03-10

- feat: add default hotkey support for Mac
- refactor: improve user feedback with more descriptive messages
- chore: update deps
