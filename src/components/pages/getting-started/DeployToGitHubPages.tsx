import Inspect from '../../common/Inspect';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const gitInitCode = `git init`;
const ghInstallCode = `brew install gh`;
const ghRepoCreateCode = `gh repo create`;
const gaaCode = `gaa`;
const gcmsgCode = `gcmsg`;
const gitPushCode = `git push`;
const viteConfigCode = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/visible-react', // <-- enter your repo name here
});`;
const deployScript = `name: Deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3

      - name: Install dependencies
        uses: bahmutov/npm-install@v1

      - name: Build project
        run: npm run build

      - name: Upload production-ready build files
        uses: actions/upload-artifact@v3
        with:
          name: production-files
          path: ./dist

  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Download artifact
        uses: actions/download-artifact@v3
        with:
          name: production-files
          path: ./dist

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
`;

const DeployToGitHubPages = () => {
  return (
    <Inspect name='GitStarted' code={viteConfigCode}>
      <section className='prose lg:prose-xl max-w-2xl mx-auto py-8'>
        <h1>Git Started</h1>

        <p>
          Now that you have your local React Project built with Vite, you should
          version-control your code with Git.
        </p>

        <SyntaxHighlighter language='bash' style={dracula} wrapLongLines={true}>
          {gitInitCode}
        </SyntaxHighlighter>

        <h2>GitHub CLI</h2>
        <p>
          And host your code on GitHub, by using the{' '}
          <a
            href='https://cli.github.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub CLI
          </a>
          .
        </p>
        <p>Install the GitHub CLI with brew:</p>

        <SyntaxHighlighter language='bash' style={dracula} wrapLongLines={true}>
          {ghInstallCode}
        </SyntaxHighlighter>

        <p>Now create your GitHub repo in your Terminal:</p>
        <SyntaxHighlighter language='bash' style={dracula} wrapLongLines={true}>
          {ghRepoCreateCode}
        </SyntaxHighlighter>

        <p>
          This will start the interactive GitHub CLI Repo Creation workflow.
          After that's done and you have your repo created, commit all of your
          code and push it up to your repo.
        </p>

        <h2>Oh My ZSH Workflow (optional, but encouraged)</h2>
        <p>
          I use{' '}
          <a href='https://ohmyz.sh/' target='_blank' rel='noopener noreferrer'>
            Oh My ZSH
          </a>{' '}
          in my Shell environment, so it has many handy aliases to speed up my
          work.
        </p>
        <p>
          I would recommend installing it if you are following along, since I
          will probably be using the Shell Aliases.
        </p>
        <p>
          After installing Oh My ZSH, you can see the list of Aliases by typing
          `alias`.
        </p>

        <p>To add all of your changed files:</p>
        <SyntaxHighlighter language='bash' style={dracula} wrapLongLines={true}>
          {gaaCode}
        </SyntaxHighlighter>

        <p>This is `git add --all`.</p>

        <p>To commit all of the files with a new message:</p>
        <SyntaxHighlighter language='bash' style={dracula} wrapLongLines={true}>
          {gcmsgCode}
        </SyntaxHighlighter>

        <blockquote>
          <p>
            This may look strange at first, but this significantly speeds up
            your workflow by reducing the amount of keystrokes to commit your
            work. Commit often, to back up your work. 💡
          </p>
        </blockquote>

        <h2>Push Your Code Up</h2>
        <p>Now push your code up to GitHub:</p>
        <SyntaxHighlighter language='bash' style={dracula} wrapLongLines={true}>
          {gitPushCode}
        </SyntaxHighlighter>

        <p>
          After that's done, go to GitHub and checkout all of the code that you
          just pushed up to GitHub.
        </p>

        <h2>Update GitHub Project Actions Permissions</h2>
        <p>
          Now that you have pushed your code up, you should update the Project
          Settings and give the GitHub Actions the appropriate privileges to run
          the Workflow we are about to set up.
        </p>

        <p>
          On your GitHub Project go to -- <code>settings/actions/general</code>.
        </p>

        <p>
          Now scroll down to the <strong>WorkFlow Permissions</strong> heading
          and update the radio button to:
        </p>
        <p>
          <code>Read and write permissions</code>
        </p>
        <p>And click Save.</p>

        <h2>Hosting your Code on GitHub Pages</h2>
        <p>
          Now that we have our code up on GitHub, let's configure Vite to work
          with GitHub Pages.
        </p>

        <h3>Configure Vite</h3>
        <p>
          In the root directory, open <code>vite.config.js</code>. It should
          look something like this:
        </p>

        <SyntaxHighlighter
          language='typescript'
          style={dracula}
          wrapLongLines={true}
        >
          {viteConfigCode}
        </SyntaxHighlighter>

        <h3>Create GitHub Deploy Script</h3>
        <p>
          In your root folder, create the <code>.github/workflows</code> folder,
          and create the deploy file within. If you are using VSCode, you can
          streamline this action by creating a new file and calling it:
        </p>

        <SyntaxHighlighter language='bash' style={dracula} wrapLongLines={true}>
          .github/workflows/deploy.yml
        </SyntaxHighlighter>

        <p>
          This will create the necessary folders and the <code>deploy.yml</code>{' '}
          file within it. Open the deploy file, and paste this code:
        </p>

        <SyntaxHighlighter language='yaml' style={dracula} wrapLongLines={true}>
          {deployScript}
        </SyntaxHighlighter>

        <p>Save your file, commit the change, and push those changes.</p>

        <SyntaxHighlighter language='bash' style={dracula} wrapLongLines={true}>
          gaa gcmsg "adding github pages workflow deploy" git push
        </SyntaxHighlighter>

        <h3>Check GitHub Actions</h3>
        <p>
          Now that you have pushed up the deploy workflow file, you should see
          the Build & Deploy in the GitHub Project Actions tab. Open the Actions
          tab, and then look under the Actions Navbar, and you should see All
          Workflows. Then you should see your workflow running.
        </p>
        <blockquote>
          <p>
            Hopefully it's successful 🤞 If it fails, click on the job and look
            at the errors.
          </p>
        </blockquote>

        <h3>On GitHub, setup GitHub Pages</h3>
        <p>
          Now that we have our Deploy Action running on our main branch for
          every commit, we need to configure our Project GitHub pages.
        </p>

        <p>
          Go to: <code>project-name/settings/Pages</code>
        </p>

        <p>
          In the GitHub Pages settings, look for the Build and Deployment
          section.
        </p>

        <ul>
          <li>
            Source, choose <strong>Deploy from a branch</strong>
          </li>
          <li>
            Branch, choose <strong>gh-pages</strong>
          </li>
        </ul>

        <p>Now click Save.</p>

        <h3>Check Actions & Check Deployed Project</h3>
        <p>
          After saving the Pages settings, go to the Actions tab, and you should
          see the new deployment running.
        </p>

        <p>
          After the workflow succeeds, you should head to your deployment by
          clicking on the Code tab. Then on the right side, you should see the
          Deployments heading. The <code>github-pages</code> branch should be
          listed below. Click on it.
        </p>

        <p>
          Then you should see a link directly to your hosted project. Click it
          and verify that everything looks good.
        </p>

        <h2>Congrats! 🎉</h2>
        <p>
          You should see your deployed Vite & React project on GitHub Pages.
        </p>

        <p>Now that wasn't so bad, was it?</p>

        <h3>Next Up! - Styling and UI</h3>
        <p>
          Now let's get Stylish and add some personality to our App.{' '}
          <a href='/getting-started/styling-and-ui'>2-Styling-and-UI</a>
        </p>
      </section>
    </Inspect>
  );
};

export default DeployToGitHubPages;
