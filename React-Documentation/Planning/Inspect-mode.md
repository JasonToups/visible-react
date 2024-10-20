# Inspect-mode

## Step 1: Create the `Inspect` Component

This component will handle the inspect state, display the component’s name, and manage an overlay (which can show the code, or any other information you want).

```jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import framer motion for animations

const Inspect = ({ name, children, code }) => {
  const [isInspecting, setIsInspecting] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const toggleInspect = () => setIsInspecting(!isInspecting);
  const toggleCode = () => setShowCode(!showCode);

  return (
    <div className="relative p-4 border">
      {/* Inspect button - Absolute position in non-inspecting mode */}
      {!isInspecting && (
        <button 
          className="absolute top-2 right-2"
          onClick={toggleInspect}
        >
          <span className="material-icons">search</span>
        </button>
      )}

      {/* Display heading and code button when inspecting */}
      {isInspecting && (
        <div className="relative">
          <h2 className="text-lg font-bold">{name}</h2>
          <button onClick={toggleCode} className="ml-2 text-blue-500 underline">
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>
        </div>
      )}

      {/* Render the children content */}
      <div className="mt-4">
        {children}
      </div>

      {/* Framer Motion overlay to show the code */}
      <AnimatePresence>
        {showCode && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75 flex items-center justify-center"
          >
            <pre className="text-white p-4 bg-black rounded">
              {code}
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Inspect;
```

## Step 2: Use `Inspect` Component Inside Other Components

Here’s how you would use the `Inspect` component within other components:

```jsx
const MyComponent = () => {
  const code = `
    const MyComponent = () => {
      return (
        <div>
          <p>This is MyComponent.</p>
        </div>
      );
    };
  `;

  return (
    <Inspect name="MyComponent" code={code}>
      <p>This is the content of MyComponent.</p>
    </Inspect>
  );
};

const NestedComponent = () => {
  const code = `
    const NestedComponent = () => {
      return (
        <div>
          <p>This is NestedComponent.</p>
        </div>
      );
    };
  `;

  return (
    <Inspect name="NestedComponent" code={code}>
      <p>This is the content of NestedComponent.</p>
    </Inspect>
  );
};
```

## Key Points

- **Framer Motion Integration:** The `AnimatePresence` and `motion.div` elements handle the smooth transitions of the overlay when showing and hiding the code.
- **Toggle Inspect Mode:** The inspect button toggles the visibility of the component heading and a button to show/hide the code.
- **Code Display:** When the "Show Code" button is clicked, an overlay appears with the component’s code, using Tailwind CSS for styling and Framer Motion for animation.
- **Component-Specific:** Since the `Inspect` component lives inside the actual component, it has direct access to the component name and code.

## Flexibility

- **Reusability:** The `Inspect` component can be used within any other component by simply passing the `name` and `code` props.
- **Framer Motion Animations:** You can adjust the animations or add more complex transitions depending on how you want to present the inspect mode and code overlay.