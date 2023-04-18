# Setup

## Config in vite.config.js

```js
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
```

## Components

```cmd
rafce
```

## Installation

### Using Vite

```cmd
npm create vite@latest .
npm run dev
```
