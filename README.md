# Weather Dashboard Demo

## Overview
Welcome to the **Weather Dashboard Demo**! This application provides users with accurate, real-time weather updates and forecasts for any selected location. Users can customize their experience through a range of features designed for convenience and personalization.

## Features

### 1. Current and Future Forecast
- View **real-time weather updates** for the current day.
- Access **detailed forecasts** for upcoming days.

### 2. Add/Remove Locations to/from Favorites
- Add your favorite cities to a **favorites list** for quick access.
- Remove cities from favorites when you no longer need them.

### 3. Add/Remove Locations to/from Search History
- View your **search history** for quick reference.
- Easily **remove** locations from your search history to keep it clean.

### 4. Light/Dark Mode Toggle
- Switch between **light mode** and **dark mode** for optimal viewing comfort.

### 5. Detailed Weather Information
- Access comprehensive weather details, including:
  - Temperature (current, high, low)
  - Humidity levels
  - Wind speed and direction
  - UV index
  - Precipitation chances

## Planned Improvements and New Features

### 1. Map Dashboard for User’s Area
- Add an **interactive map** that displays the user's selected location and surrounding areas.
- The map will provide a visual overview of the region and relevant weather markers.

### 2. Back Button for City Pages
- Implement a **"Back" button** to allow users to navigate easily back to the main dashboard or previous search.
- This feature will enhance usability, especially for users exploring multiple locations.

### 3. Maritime Options for Coastal and Island Areas
- Introduce **maritime-specific weather options** for coastal and island regions, including:
  - **Tide levels** and forecasts
  - **Wave heights** and surf conditions
  - **Marine weather warnings** for storms or rough seas

## Getting Started

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project folder:
   ```bash
   cd weather-dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Usage
- Open the application in your browser at `http://localhost:3000`.
- Use the search bar to find weather updates for any location.
- Save frequently used locations to your **favorites** for quick access.
- Switch between **light** and **dark** modes to suit your preferences.

## Contributing
We welcome contributions to enhance the Weather Dashboard! To contribute:
1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## Future Goals
In addition to the planned improvements, the following features may be explored:
- **Weather notifications and alerts** for extreme conditions.
- **Multi-language support** to serve global users.
- **Offline access** for previously viewed weather data.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact
For feedback or inquiries, please open an issue or contact us through the repository's discussion board.

## Other Tips: React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
