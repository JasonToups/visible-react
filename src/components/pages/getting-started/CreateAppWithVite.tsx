import Inspect from '../../common/inspect';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Correctly importing vs2015 theme

const code = `  return (
    <section className='p-10 flex flex-col items-center justify-center h-screen bg-gray-800 text-white'>
      <h1 className='text-5xl py-7'>Visible React</h1>
      <div className='prose lg:prose-xl text-left leading-8 max-w-lg'>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </section>
  );
  `;

const CreateAppWithVite = () => {
  return (
    <Inspect name='CreateAppWithVite' code={code}>
      <section>
        <h1>Creating your React App with Vite</h1>
        <p>
          We will be using Vite to set up our App. But that's not all. We can
          streamline a ton of processes by setting up our Styling & UI
          frameworks by setting up Tailwind & ShadCN/UI at the same time.
        </p>

        <h2>Setup your App with Vite</h2>
        <p>
          You can use React's{' '}
          <a
            href='https://create-react-app.dev/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Create React App
          </a>{' '}
          in the command line to create your React App, or you can use{' '}
          <strong>Vite</strong> to create your App.
        </p>
        <p>
          <a href='https://vite.dev/' target='_blank' rel='noopener noreferrer'>
            Vite
          </a>{' '}
          is becoming popular, since it creates smaller bundle sizes and with
          auto-update the DOM with your file changes by using{' '}
          <a
            href='https://vite.dev/guide/features.html#hot-module-replacement'
            target='_blank'
            rel='noopener noreferrer'
          >
            Hot Module Replacement
          </a>
          . This is preconfigured when you use Vite to create your React
          application. Very handy 🙌
        </p>

        <p>In the command line, create your application with Vite:</p>

        <SyntaxHighlighter
          language='typescript' // Set the language you're highlighting (e.g., "javascript")
          style={dracula} // Set the VSCode-like theme
          wrapLongLines={true} // Ensures long lines wrap inside the container
        >
          npm create vite@latest
        </SyntaxHighlighter>

        <blockquote>
          <p>
            If you don't have Vite installed, then you will be asked to install
            it.
          </p>
        </blockquote>

        <h2>Choose your Framework & JS</h2>
        <p>
          You will be asked to choose your JavaScript framework, choose React.
          Then you will be asked to choose your JavaScript variant. I would
          recommend going with <strong>Typescript</strong>, since this skill is
          in demand. And it would be good to get used to working with data
          types, since you will probably encounter this with any professional
          work you do.
        </p>

        <p>
          Also, there's the option for Typescript + SWC. This is{' '}
          <a href='https://swc.rs/' target='_blank' rel='noopener noreferrer'>
            <strong>S</strong>peedy <strong>W</strong>eb <strong>C</strong>
            ompiler
          </a>
          , a "Rust-based platform for the Web.
        </p>

        <blockquote>
          <p>
            I would not recommend using this now, it would provide a performance
            boost to your application, but when you are just getting started, I
            would just stick with Typescript, and look into the feature of SWC
            when it comes time to build a larger application.
          </p>
        </blockquote>

        <h2>Install Dependencies & Run your App</h2>
        <p>
          After Vite creates your App, then <code>cd</code> into the Project
          Folder, and run <code>npm install</code>.
        </p>
        <p>
          Then when all of the Node Packages have been installed, run your app:
          <SyntaxHighlighter
            language='typescript' // Set the language you're highlighting (e.g., "javascript")
            style={dracula} // Set the VSCode-like theme
            wrapLongLines={true} // Ensures long lines wrap inside the container
          >
            npm run dev
          </SyntaxHighlighter>
        </p>

        <p>
          Vite will run your project locally, and show you where the site is
          hosted. It should be:
          <a
            href='http://localhost:5173'
            target='_blank'
            rel='noopener noreferrer'
          >
            http://localhost:5173
          </a>
        </p>

        <p>
          Open that link in your browser, and you should see your React App
          running:
        </p>
        <img src='vite-and-react.png' alt='Vite and React app screenshot' />

        <p>
          You can click on the button and it will show the click count. If you
          look into <code>App.tsx</code>, you will see the <code>onClick</code>{' '}
          function within the button element:
        </p>

        <SyntaxHighlighter
          language='typescript' // Set the language you're highlighting (e.g., "javascript")
          style={dracula} // Set the VSCode-like theme
          wrapLongLines={true} // Ensures long lines wrap inside the container
        >
          {`<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>`}
        </SyntaxHighlighter>

        <h2>Next Up! - Code with Style 💃🕺</h2>
        <p>
          Now that we've created our Application, let's add some style to it -{' '}
          <a href='/getting-started/styling-and-ui'>Styling and UI</a>
        </p>
      </section>
    </Inspect>
  );
};

export default CreateAppWithVite;
