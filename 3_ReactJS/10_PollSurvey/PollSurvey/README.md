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
npm create vite@latest project_name
```
```cmd
cd project_name
npm install
npm install bootstrap@latest
npm i react-router-dom
npm run dev
```
