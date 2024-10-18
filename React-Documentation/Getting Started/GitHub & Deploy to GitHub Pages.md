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

