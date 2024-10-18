## Git Started
Now that you have your local React Project built with Vite, you should version-control your code with Git.

```
git init
```

### GitHub CLI
And host your code on GitHub, by using the [GitHub CLI](https://cli.github.com/).

Install the GitHub CLI with brew:
```
brew install gh
```

Now create your GitHub repo in your Terminal:
```
gh repo create
```

This will start the interactive GitHub CLI Repo Creation workflow.

After that's done and you have your repo created, commit all of your code and push it up to your repo.

### Oh My ZSH Workflow (optional, but encouraged)
I use [Oh My ZSH](https://ohmyz.sh/) in my Shell environment, so it has many handy aliases to speed up my work.

I would recommend installing it if you are following along, since I will probably be using the Shell Aliases

After installing Oh My ZSH, you can see the list of Aliases by typing `alias`

To add all of your changed files:
```
gaa
```
This is `git add --all`

To commit all of the files with a new message:
```
gcmsg
```

This is `git commit --message`

> This may look strange at first, but this significantly speeds up your workflow by reducing the amount of keystrokes to commit your work. Commit often, to backup your work. 💡

### Push Your Code Up
Now push your code up to GitHub
```
git push
```

After that's done, go to GitHub and checkout all of the code that you just pushed up to GitHub.

### Update GitHub Project Actions Permissions

Now that you have pushed your code up, you should update the Project Settings and give the GitHub Actions the appropriate privileges to run the Workflow we are about to setup.

On your GitHub Project go to --> `settings/actions/general`

Now scroll down to the **WorkFlow Permissions** heading and update the radio button to:
`Read and write permissions`

And click Save.

## Hosting your Code on GitHub Pages
Now that we have our code up on GitHub, let's configure Vite to work with GitHub Pages.

### Configure Vite
In the root directory, open `vite.config.js`

It should look something like this:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

Within the `defineConfig`, we are going to add the `base` property to point to our GitHub Repo:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/approachable-react" // <-- enter your repo name here
})
```

### Create GitHub Deploy Script

In your root folder, create the `.github/workflows` folder, and create the deploy file within.

If you are using VSCode, you can streamline this action by creating a new file and calling it:
```
.github/workflows/deploy.yml
```

This will create the necessary folders and create the `deploy.yml` file within it.

Open the deploy file, and paste this code:

```yml
name: Deploy

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
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Save your file, commit the change, and push those changes.

```
gaa
gcmsg "adding github pages workflow deploy"
git push
```

### Check GitHub Actions
Now that you have pushed up the deploy workflow file, you should see the Build & Deploy in the GitHub Project Actions tab.

Open the Actions tab, and then look under the Actions Navbar, and you should see All Workflows. Then you should see your workflow running.

> Hopefully it's successful 🤞 If it fails, click on the job and look at the errors.

### On GitHub, setup GitHub Pages

Now that we have our Deploy Action running on our main branch for every commit, we need to configure our Project GitHub pages.

Go to:
`project-name/settings/Pages`

In the GitHub Pages settings, look for the  Build and Deployment section.

- Source, choose **Deploy from a branch**
- Branch, choose **gh-pages**

Now click Save.

### Check Actions & Check Deployed Project

After saving the Pages settings, go to the Actions tab, and you should see the new deployment running.

After the workflow succeeds, you should head to your deployment by clicking on the Code tab.

Then on the right side, you should see the Deployments heading.
The `github-pages` branch should be listed below.
Click on it.

Then you should see a link directly to your hosted project.

Click it and verify that everything looks good.

Congrats! 🎉
You should see your deployed Vite & React project on GitHub Pages.

Now that wasn't so bad, was it?
