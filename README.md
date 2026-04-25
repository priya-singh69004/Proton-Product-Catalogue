# Shopify React UI with Polaris Web Components

This project is a React-based user interface that displays a list of products, allows toggling their "Featured" status, and visually separates the featured products. It combines the power of React, the utility-first styling of Tailwind CSS, and the native Shopify admin feel using Shopify's App Web Components.

## How it was built

1. **Initialization**:
   - The project was bootstrapped using Vite with the React + JavaScript template for a fast, modern build setup.
   - Tailwind CSS was integrated by installing the necessary dependencies (`tailwindcss`, `postcss`, `autoprefixer`) and initializing `tailwind.config.js` and `postcss.config.js`.

2. **Integrating Shopify Web Components**:
   - The Shopify Polaris Web Components CDN (`https://cdn.shopify.com/shopifycloud/polaris.js`) was added to `index.html`. This makes standard Shopify components (like `<ui-button>` and `<ui-badge>`) available as custom web elements throughout the app.

3. **React State & Logic (`src/App.jsx`)**:
   - The application manages a list of mock products in its local state using the `useState` hook.
   - The `toggleFeatured` function updates the `isFeatured` boolean flag on a product when its corresponding button is clicked.
   - The UI computes `featuredProducts` and `regularProducts` arrays on the fly to render two distinct sections.

4. **Web Components in React**:
   - We utilized `<ui-badge tone="success">Featured</ui-badge>` to display the featured indicator natively.
   - We utilized `<ui-button>` for the interaction. Because standard React Synthetic Events (`onClick`) might occasionally conflict with custom elements in older configurations, a `useRef` and `useEffect` pattern was used to attach a native standard DOM `click` event listener directly to the `<ui-button>` reference, ensuring perfect compatibility.

5. **Styling and Polish**:
   - The layout uses standard Tailwind grid and flexbox utilities to create a responsive, modern card layout.
   - Hover effects, shadow transitions, and subtle scaling animations were applied to make the UI "pop" and feel premium, fulfilling the requirement for a great-looking design.

## How to Run Locally

First, ensure you have Node.js installed, then run the following commands:

```bash
# Install dependencies
npm install

# Start the Vite development server
npm run dev
```

Visit the local URL provided by Vite in your browser to interact with the application.
