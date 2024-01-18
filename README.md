# About

This project is an interactive "Battle" application developed with
React, Material-UI (MUI), and TypeScript. It features a simple interface
where users can initiate a battle animation and receive a random outcome
of "Victory" or "Defeat."

# Table of Contents

> - [About](#about)
> - [Prerequisites](#prerequisites)
> - [Quick start](#quick-start)
>   - [Build for production and
>     preview](#build-for-production-and-preview)
> - [Development](#development)
>   - [Available Scripts](#available-scripts)

# Prerequisites

| Program        | Version                     | Description                                                                   |
| -------------- | --------------------------- | ----------------------------------------------------------------------------- |
| nvm (optional) | \>=0.39.3                   | [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating) |
| node           | see [.nvmrc](./.nvmrc) file | JavaScript runtime environment                                                |

Before starting, make sure you have Node.js compatible with the version
specified in the `.nvmrc` file. It is recommended to use
[nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) to install
and manage Node.js versions.

# Quick start

## Build for production and preview

### With `nvm`:

```bash
nvm use && npm install && npm run build && npm run preview
```

### Without `nvm`:

```bash
npm install && npm run build && npm run preview
```

# Development

### With `nvm`:

```bash
nvm use && npm install && npm start
```

### Without `nvm`:

```bash
npm install && npm start
```

## Available Scripts

- `npm dev` Start the dev server in the current directory.
- `npm start` Start the dev server in the current directory and open
  the browser.
- `npm build` Build for production to the directory `dist`.
- `npm preview` Locally preview the production build. Do not use this
  as a production server, as it's not designed for it.
- `npm lint` Run ESLint. Can be run as part of continuous integration
  pipeline.

## Features

- Modern, clean, and user-friendly interface developed with MUI.
- Interactive "Start Battle" button to trigger the battle process.
- A Battle animation display using Lottie's pre-made animations.
- Randomized battle outcome display after the animation.

## Dependencies

- React (`react`, `react-dom`)
- MUI (`@mui/material`, `@mui/system`)
- Lottie (`lottie-react`, `lottie-web`)
- Emotion (`@emotion/react`, `@emotion/styled`)
- Vite, TypeScript, ESLint, and other development tools.

## Notes

- This application was bootstrapped with Vite and configured for React with TypeScript support.
