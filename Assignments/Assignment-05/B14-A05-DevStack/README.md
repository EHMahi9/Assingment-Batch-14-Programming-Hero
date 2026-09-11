# DevStack

DevStack is a responsive technology stack management web application built with React and TypeScript. It allows users to explore popular web technologies, view their details, and add their favorite technologies to a personal stack.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Toastify
- JavaScript / ES6
- HTML5
- CSS3

## Key Features

1. **Technology Explorer**
   - Displays a collection of popular technologies.
   - Each technology card includes its icon, name, category, description, difficulty level, rating, and badge.
   - Technology data is loaded dynamically from `public/data.json`.

2. **Custom Technology Stack**
   - Users can add technologies to their personal stack.
   - Duplicate technologies cannot be added.
   - Users can remove individual technologies or clear the entire stack.
   - The selected technology count is displayed dynamically.

3. **Responsive User Interface**
   - Fully responsive design for desktop, tablet, and mobile devices.
   - Includes a responsive navbar with a mobile hamburger menu.
   - Uses reusable React components for the navbar, hero section, technology cards, stack section, about section, and footer.

## React Questions & Answers

### 1. What is the difference between State and Props?

**Props** are used to pass data from a parent component to a child component. Props are read-only and should not be modified by the child component.

**State** is data managed inside a component. When state changes, React re-renders the component.

Example:

```tsx
function UserCard({ name }: { name: string }) {
  return <h2>{name}</h2>;
}