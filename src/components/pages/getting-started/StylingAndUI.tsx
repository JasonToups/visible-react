import React from 'react';
import Inspect from '../../common/Inspect';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeForShadCNUI = `import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}`;

const codeForTailwindBuildProcess = `npx tailwindcss -i ./src/input.css -o ./src/output.css --watch`;

const codeForNodeTypes = `npm i -D @types/node`;

const codeForShadCNCLI = `npx shadcn@latest init`;

const codeForAddShadCNComponent = `npx shadcn@latest add button`;

const codeForScripts = `{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "tailwind": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
  }
}`;

const StylingAndUI = () => {
  return (
    <Inspect name='StylingAndUI' code={codeForShadCNUI}>
      <section className='prose lg:prose-xl max-w-2xl mx-auto py-8'>
        <h1>UI Framework - ShadCN UI</h1>

        <h2>Why Tailwind CSS?</h2>
        <p>
          There are many ways we can go about styling our application, but a
          popular pick these days is{' '}
          <a
            href='https://tailwindcss.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Tailwind CSS
          </a>
          . It's an in-demand skillset and can speed up building your
          application once you begin to commit the classes to memory.
        </p>
        <p>
          With Tailwind, you can style your components from within the JSX, so
          you don't have to leave the file to style.
        </p>

        <h2>What is ShadCN/UI?</h2>
        <p>
          ShadCN/UI is a UI framework of Components built off of Tailwind that
          you can use for basic and more complex UI features, such as Navbars,
          Modals, Popups, etc.
        </p>
        <p>
          This is incredibly helpful with speeding up development time, since
          you can focus more on your features, and not so much on hooking up all
          of these UI elements. And paired with Tailwind, you can make these
          components look however you want.
        </p>

        <h2>Installing ShadCN/UI & Tailwind in your App</h2>
        <p>
          Since we built our project with Vite, we will be using the{' '}
          <a
            href='https://ui.shadcn.com/docs/installation/vite'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite instructions for installing ShadCN
          </a>
          .
        </p>
        <p>
          These instructions are handy, since they walk you through installing
          Tailwind & ShadCN at the same time. Skip the 1st step, since we
          already created our Vite Application.
        </p>

        <h3>Install Tailwind, PostCSS & Autoprefixer</h3>
        <p>
          The 2nd step of the ShadCN installation process has you install
          Tailwind, PostCSS & Autoprefixer.
        </p>

        <h3>Update Several Files & Install Node Types</h3>
        <p>
          Pay close attention to the next few steps, since you will be updating
          some base files that were created during installation, and your{' '}
          <code>vite.config.ts</code> file. You'll also need to install node
          types as a dependency.
        </p>
        <SyntaxHighlighter language='bash' style={dracula} wrapLongLines={true}>
          {codeForNodeTypes}
        </SyntaxHighlighter>

        <h3>Run the ShadCN CLI</h3>
        <p>
          Now that Tailwind is installed and your files are configured, it's
          time to run the shadcn-ui init command to setup your project.
        </p>
        <SyntaxHighlighter language='bash' style={dracula} wrapLongLines={true}>
          {codeForShadCNCLI}
        </SyntaxHighlighter>

        <h2>Working with ShadCN/UI</h2>
        <p>
          The final step of the installation shows you how to work with the UI
          library.
        </p>
        <SyntaxHighlighter language='bash' style={dracula} wrapLongLines={true}>
          {codeForAddShadCNComponent}
        </SyntaxHighlighter>
        <p>Use the button like this:</p>
        <SyntaxHighlighter
          language='typescript'
          style={dracula}
          wrapLongLines={true}
        >
          {codeForShadCNUI}
        </SyntaxHighlighter>

        <h2>Finish Configuring Tailwind</h2>
        <p>
          There are still some steps for configuring Tailwind that were left out
          of the ShadCN installation. Head to the{' '}
          <a
            href='https://tailwindcss.com/docs/installation'
            target='_blank'
            rel='noopener noreferrer'
          >
            Tailwind Installation instructions
          </a>{' '}
          and finish setting up Tailwind.
        </p>

        <h3>Running the Tailwind Build Process</h3>
        <p>
          There's an important step in the Installation that shows you how to
          start the Tailwind Build Process, which should run as you are
          developing.
        </p>
        <SyntaxHighlighter language='bash' style={dracula} wrapLongLines={true}>
          {codeForTailwindBuildProcess}
        </SyntaxHighlighter>

        <h3>Add Tailwind Build Process to Scripts</h3>
        <p>
          Since you should run this whenever you are developing, I would
          recommend adding this to your <code>package.json</code> scripts.
        </p>
        <SyntaxHighlighter
          language='typescript'
          style={dracula}
          wrapLongLines={true}
        >
          {codeForScripts}
        </SyntaxHighlighter>

        <h3>Remove Conflicting CSS Stylesheets</h3>
        <p>
          The only stylesheets you should be using with Tailwind for now are the{' '}
          <code>input.css</code> and <code>output.css</code> sheets. Remove the{' '}
          <code>App.css</code> and <code>index.css</code> stylesheets if they
          exist, and remove their imports from any <code>.tsx</code> files.
        </p>

        <h2>Working with Tailwind</h2>
        <p>
          If you haven't worked with Tailwind before, I would highly recommend
          reading their{' '}
          <a
            href='https://tailwindcss.com/docs/utility-first'
            target='_blank'
            rel='noopener noreferrer'
          >
            Utility-First Fundamentals
          </a>{' '}
          to get a better understanding of how Tailwind works.
        </p>

        <h3>💡 Install IntelliSense for VS Code (Optional)</h3>
        <p>
          If you are using VSCode as your IDE, install the official{' '}
          <a
            href='https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss'
            target='_blank'
            rel='noopener noreferrer'
          >
            Tailwind CSS IntelliSense extension
          </a>
          , so you can get autocomplete, syntax highlighting & linting.
        </p>

        <h2>Next Up! - Deploy 🚀</h2>
        <p>
          Now that this is done, let's push this code up to{' '}
          <a href='/getting-started/deploy-to-github-pages'>
            GitHub & Setup GitHub Pages to host your Project
          </a>
          .
        </p>
      </section>
    </Inspect>
  );
};

export default StylingAndUI;
