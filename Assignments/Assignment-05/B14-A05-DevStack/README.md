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

Here, name is a prop.

2. What is the purpose of useState in React?

useState is a React Hook that allows functional components to store and manage state.

Example:

const [count, setCount] = useState(0);

Here:

count is the current state value.
setCount updates the state.
0 is the initial value.

When setCount is called, React updates the state and re-renders the component.

3. What is the purpose of useEffect in React?

useEffect is used to perform side effects in a React component.

Common examples include:

Fetching data from an API
Updating the document title
Setting up event listeners
Working with timers

In this project, useEffect is used to load technology data from data.json.

useEffect(() => {
  fetch('/data.json')
    .then((response) => response.json())
    .then((data) => {
      setTechs(data);
    });
}, []);

The empty dependency array [] means the effect runs after the component's initial render.

4. How can you share state between components in React?

State can be shared between components by lifting the state up to their nearest common parent component.

The parent component manages the state and passes the required data and functions to child components through props.

For example, in this project, the App component manages the stack state and passes handleAddToStack and isAdded to TechCard.

5. How is event handling done in React?

React handles events using event handler functions.

For example:

<button onClick={handleAddToStack}>
  Add to Stack
</button>

When the button is clicked, React calls the handleAddToStack function.

For functions that need an argument, an arrow function can be used:

<button onClick={() => handleRemoveFromStack(item.id)}>
  Remove
</button>
6. What is conditional rendering in React?

Conditional rendering means displaying different UI depending on a condition.

For example:

{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}

If the stack is empty, React displays the empty state. Otherwise, it displays the selected technologies.

7. What is the difference between controlled and uncontrolled components?

A controlled component has its form value controlled by React state.

Example:

const [name, setName] = useState('');

<input
  value={name}
  onChange={(event) => setName(event.target.value)}
/>

React controls the input value through state.

An uncontrolled component stores its value in the DOM instead of React state and is commonly accessed using a ref.

Controlled components are useful when React needs to manage and respond to form data changes.

Project Structure
B14-A05-DevStack/
├── public/
│   ├── data.json
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   └── TechCard.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
Getting Started

Install the dependencies:

npm install

Run the development server:

npm run dev

Build the project for production:

npm run build