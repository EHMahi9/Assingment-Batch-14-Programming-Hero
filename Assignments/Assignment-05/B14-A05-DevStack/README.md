# DevStack

DevStack is an interactive technology stack builder and discovery platform designed for modern web developers. It allows developers to browse curated tools, view key details such as difficulty, ratings, categories, and badges, and assemble a customized development stack in real time.

## Project Description

DevStack simplifies the process of choosing the right technologies for new projects. Users can explore various frontend, backend, database, and styling solutions loaded dynamically from an external data source. The application provides an interactive experience where developers can add technologies to their personal stack sidebar, prevent duplicate selections, remove items individually, or clear the stack completely with instant toast notifications.

## Technologies Used

- **React 19** – Component-based UI library
- **TypeScript** – Static typing for robust code quality
- **Vite** – Fast build tool and modern local development server
- **Tailwind CSS** – Utility-first responsive styling
- **React-Toastify** – Interactive toast alerts for stack actions
- **HTML5 & CSS3** – Semantic structure and custom brand styling

## Key Features

1. **Dynamic Technology Discovery**
   - Fetches and displays popular technologies dynamically from an asynchronous JSON source (`/data.json`).
   - Displays a dedicated loading state while data loads, and an error fallback with a retry option if fetching fails.
   - Each card provides complete information: icon, name, badge, description, category, difficulty level, rating, and action button.

2. **Interactive Stack Management**
   - Users can add technologies to their "Your Stack" sidebar with one click.
   - Prevents duplicate additions with helpful warning toasts.
   - Added items reflect an updated disabled state ("✓ Added to Stack").
   - Users can remove individual technologies or clear the entire stack with "Remove All".
   - Shows a clean empty-state placeholder when no technologies have been added yet.

3. **Responsive Design & Modern UI**
   - Clean, modern design featuring a unified brand gradient (orange → pink → violet).
   - Fully responsive layout: 3 columns on desktop, 2 columns on tablet, and 1 column on mobile.
   - Sticky navigation bar with mobile hamburger drawer and smooth anchor navigation.
   - Complete footer with brand links, navigation items, and social links.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows developers to write HTML-like markup directly inside JavaScript and TypeScript files. React uses JSX because it makes component templates visual, readable, and intuitive while keeping the full programmatic power of JavaScript (such as variables, loops, and conditions inside `{}`). Behind the scenes, JSX is compiled into standard JavaScript function calls that produce React elements.

### 2. What is the difference between props and state?
- **Props (Properties)**: Props are inputs passed down from a parent component to a child component. They are read-only (immutable by the child) and allow components to remain reusable and configurable.
- **State**: State is data managed locally and internally within a component. Unlike props, state is mutable through its updater function (`setState`). When a component's state changes, React re-renders that component to update the UI.

### 3. What does the useState hook do, and where did you use it in this project?
The `useState` hook allows functional components to store, track, and update internal state values across renders. When the state setter function is called, React triggers a re-render with the new state.
In this project, `useState` is used in:
- `App.tsx`:
  - `techs`: Stores the array of technology cards fetched from `/data.json`.
  - `isLoading`: Tracks loading status while fetching data.
  - `error`: Holds error messages if fetching fails.
  - `stack`: Tracks the list of technologies added to the user's custom stack.
- `Navbar.tsx`:
  - `isMenuOpen`: Toggles the mobile navigation menu open and closed.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
The `useEffect` hook allows functional components to execute side effects, such as data fetching, subscriptions, timers, or manual DOM interactions.
In this project, `useEffect` was needed to load `/data.json` asynchronously when the application first loads. By providing an empty dependency array `[]`, the fetch operation runs exactly once on initial mount, safely populating our state without creating an infinite re-render loop.

### 5. Why does every item in a .map() list need a unique key prop?
React relies on the `key` prop during reconciliation (virtual DOM diffing) to track which items in an array have changed, been added, reordered, or removed. Supplying a unique and stable identifier (such as `tech.id`) allows React to update only the specific DOM nodes that changed rather than re-rendering the entire list, resulting in optimal performance and consistent component state.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means displaying different UI elements or components based on specific conditions or state values, using JavaScript operators like ternary expressions (`? :`), logical operators (`&&`), or `if/else` statements.
In `App.tsx`, conditional rendering is used to display the empty stack placeholder when no technologies have been added yet:
```tsx
{stack.length === 0 ? (
  <div className="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-8 text-center">
    <span className="mb-3 block text-4xl">📭</span>
    <p className="font-medium text-gray-500">Your stack is empty.</p>
    <p className="mt-2 text-xs text-gray-400">
      Add technologies from the list to build your custom stack.
    </p>
  </div>
) : (
  <div className="space-y-4">
    {/* Stacked items and Remove All button */}
  </div>
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- **Parent to Child**: Data is passed directly downward via **props** on the child component element. For example, `App.tsx` passes the `tech` object and `isAdded` boolean to `TechCard`:
  ```tsx
  <TechCard tech={tech} isAdded={isAdded} handleAddToStack={handleAddToStack} />
  ```
- **Child to Parent**: The parent defines a callback function (e.g., `handleAddToStack`) and passes it as a prop to the child. When an event happens inside the child (such as clicking the "Add to Stack" button), the child invokes that callback function:
  ```tsx
  <button onClick={() => handleAddToStack(tech)}>Add to Stack</button>
  ```
  This sends data back up to update the parent component's state.

## Project Structure

```text
B14-A05-DevStack/
├── public/
│   ├── data.json              # Curated technologies data source
│   ├── favicon.svg            # Site favicon
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── banner-stack.png   # Hero section banner illustration
│   ├── components/
│   │   ├── About.tsx          # About DevStack section
│   │   ├── Footer.tsx         # Footer with links and social references
│   │   ├── Hero.tsx           # Hero banner section with CTA buttons
│   │   ├── Navbar.tsx         # Responsive navbar with mobile menu
│   │   └── TechCard.tsx       # Reusable technology card component
│   ├── App.css
│   ├── App.tsx                # Main application component & state logic
│   ├── index.css              # Global styles & centralized brand gradient
│   └── main.tsx               # Application entry point
├── index.html                 # Main HTML document
├── package.json               # Project dependencies and npm scripts
├── tsconfig.json              # TypeScript configuration
└── vite.config.ts             # Vite configuration
```

## Getting Started

Follow these steps to run DevStack locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/EHMahi9/Assingment-Batch-14-Programming-Hero.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd "Assignments/Assignment-05/B14-A05-DevStack"
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## GitHub Repository

- **Repository URL:** [https://github.com/EHMahi9/Assingment-Batch-14-Programming-Hero](https://github.com/EHMahi9/Assingment-Batch-14-Programming-Hero)

## Live Website

- **Live Deployment:** [https://devstack-mahi.vercel.app](https://devstack-mahi.vercel.app)

## Author

- **Developer:** [EHMahi9](https://github.com/EHMahi9)
- **Batch:** Programming Hero Web Development Batch 14