# Dev Stack Builder 🚀

A modern React + TypeScript website for exploring popular development technologies and building a personalized technology stack.

## Project Overview

Dev Stack Builder lets users browse technologies, view their category, description, rating, difficulty level, and add technologies to their own stack.

The project was built as part of Programming Hero Batch 14 Assignment 05.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React-Toastify
- JSON
- Git & GitHub

## Key Features

1. Browse technologies loaded dynamically from a JSON file.
2. Add and remove technologies from a personal stack without duplicates.
3. Responsive design for desktop, tablet, and mobile devices.
4. Toast notifications for add, duplicate, remove, and remove-all actions.
5. Loading state while technology data is being fetched.

## React Questions & Answers

### 1. What is JSX?

JSX is a syntax extension for JavaScript that lets us write HTML-like code inside JavaScript or TypeScript. React uses JSX to describe what the UI should look like. JSX makes components easier to read and write because the structure and logic can stay close together.

### 2. What is the difference between Props and State?

Props are values passed from a parent component to a child component. They are read-only from the child component's side.

State is data managed inside a component. When state changes, React re-renders the component so the UI can show the updated information.

### 3. What is the useState hook and where is it used?

`useState` is a React Hook used to store and update state inside a functional component.

In this project, it is used to manage the technology list, the selected stack, and loading-related UI state.

### 4. What is the useEffect hook and how is it used in this project?

`useEffect` is used for side effects in React, such as fetching data, interacting with browser APIs, or running code after rendering.

In this project, `useEffect` loads the technology data from the JSON file when the application starts.

### 5. Why is the key prop important when using map()?

The `key` prop gives React a stable identity for each item in a list. React uses keys to understand which items were added, removed, or changed.

In this project, each technology uses its unique `id` as the key.

### 6. What is conditional rendering? Give an example from this project.

Conditional rendering means showing different UI depending on a condition.

For example, the stack sidebar shows an empty-state message when no technologies have been selected. When technologies are selected, it instead displays the selected items.

### 7. How can data be passed from a parent component to a child component and from a child to a parent?

A parent passes data to a child through props.

To send information from a child back to a parent, the parent can pass a callback function as a prop. The child calls that function when an event happens, allowing the parent to update its state.

## Links

- GitHub: https://github.com/EHMahi9/Assingment-Batch-14-Programming-Hero
- Live Demo: Add your deployed project link here

## Author

EHMahi9

© 2026 Dev Stack Builder. All rights reserved.
