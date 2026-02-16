# React Learning - Props and Data Mapping

This project is a hands-on exploration of React basics, specifically focusing on how to pass data between components using **Props** and how to render lists of data efficiently.

## Concepts Covered

- **Component Structure**: Understanding how components interact (Parent -> Child).
- **Props**: Passing data from `Propss.jsx` to `Product.jsx`.
- **Mapping Data**: Using `.map()` to iterate over an array of objects and generate components dynamically.
- **Component Specific Styling**: Managing CSS for individual UI elements like the Product card.

## Project Structure

- `src/App.jsx`: The main entry component that renders the `Propss` container.
- `src/Propss.jsx`: Contains the data (array of objects) and maps it to the `Product` component.
- `src/Product.jsx`: A reusable UI component that displays product details via props.
- `src/Product.css`: Custom styling for the product cards (borders, shadows, layout).

## Current Feature: Product List

The application currently displays a dynamic list of products (Mobile, Laptop, Tablet) stored in an array:

```javascript
const products = [
  { title: "Mobile", price: 10000 },
  { title: "Laptop", price: 40000 },
  { title: "Tablet", price: 30000 }
];
```

## How to Run

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Dev Server:**
   ```bash
   npm run dev
   ```

3. **Production Build:**
   ```bash
   npm run build
   ```