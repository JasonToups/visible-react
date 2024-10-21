import React, { useState, ReactNode } from 'react';
import { Button } from '../ui/button'; // Import the button component
import { motion, AnimatePresence } from 'framer-motion'; // Import framer motion for animations
import { Eye, EyeClosed, CircleX } from 'lucide-react'; // Import the Eye and CircleX icons from lucide-react
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Correctly importing vs2015 theme

interface InspectProps {
  name: string;
  children: ReactNode;
  code: string;
}

const Inspect = ({ name, children, code }: InspectProps) => {
  const [isInspecting, setIsInspecting] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const toggleInspect = () => setIsInspecting(!isInspecting);
  const toggleCode = () => setShowCode(!showCode);

  return (
    <div className='relative border'>
      <Button
        className='absolute top-2 right-2 z-10'
        variant='ghost'
        size='lg'
        onClick={toggleInspect}
      >
        {isInspecting ? <EyeClosed size={40} /> : <Eye size={40} />}
      </Button>

      {/* Display heading and code button when inspecting */}
      {isInspecting && (
        <div className='relative'>
          <Button
            variant='ghost'
            onClick={toggleCode}
            className='ml-2 text-blue-500 underline'
          >
            <h2 className='text-2xl font-bold p-3'>{`<${name}/>`}</h2>
          </Button>
        </div>
      )}

      {/* Render the children content */}
      <div>{children}</div>

      {/* Framer Motion overlay to show the code */}
      <AnimatePresence>
        {showCode && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className='fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50'
          >
            {/* SyntaxHighlighter for code with VSCode-like theme */}
            <div className='relative p-4 bg-black rounded max-w-full overflow-auto'>
              <SyntaxHighlighter
                language='typescript' // Set the language you're highlighting (e.g., "javascript")
                style={dracula} // Set the VSCode-like theme
                wrapLongLines={true} // Ensures long lines wrap inside the container
              >
                {code}
              </SyntaxHighlighter>
              <CircleX
                onClick={toggleCode}
                className='absolute top-2 right-2 cursor-pointer text-white'
                size={24} // Adjust the size of the icon
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Inspect;
