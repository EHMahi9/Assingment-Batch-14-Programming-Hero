# Dev Stack Builder

Dev Stack Builder is a responsive React and TypeScript web application that allows developers to explore popular technologies and create their own personalized technology stack.

Users can browse technologies loaded dynamically from a JSON file, view important information about each technology, and add or remove technologies from their personal stack.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React-Toastify
- JSON
- Git & GitHub

## Key Features

### 1. Dynamic Technology Explorer

Technology information is loaded dynamically from `public/data.json` using the Fetch API. Each technology is displayed in a responsive card with its icon, name, description, category, difficulty, badge, and rating.

### 2. Personal Stack Builder

Users can add technologies to their own stack and remove individual technologies whenever they want. Duplicate technologies cannot be added to the stack, and already-added technologies show an `Added to Stack` state.

### 3. Responsive and Interactive UI

The application provides a responsive layout for desktop, tablet, and mobile devices. Interactive actions provide instant feedback using React-Toastify notifications.

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like syntax inside JavaScript or TypeScript.

For example:

```tsx
const element = <h1>Hello World</h1>;