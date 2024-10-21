## UI Framework - ShadCN UI

## Why Tailwind CSS?
There are many ways we can go about styling our application, but a popular pick these days is [Tailwind CSS](https://tailwindcss.com/). It's an in-demand skillset and can speed up building your application once you begin to commit the classes to memory.

With Tailwind, you can style your components from within the JSX, so you don't have the leave the file to style.
## What is ShadCN/UI?
ShadCN/UI is a UI framework of Components built off of Tailwind that you can use for basic and more complex UI features, such as Navbars, Modals, Popups, etc.

This is incredibly helpful with speeding up development time, since you can focus more on your features, and not so much on hooking up all of these UI elements.

And paired with Tailwind, you can make these components look however you want.

## Installing ShadCN/UI & Tailwind in your App
Since we built our project with Vite, we will be using the [Vite instructions for installing ShadCN](https://ui.shadcn.com/docs/installation/vite).

These instructions are handy, since they walk you through installing Tailwind & ShadCN at the same time.

Skip the 1st step, since we already created our Vite Application.

### Install Tailwind, PostCSS & Autoprefixer
The 2nd step of the ShadCN installation process has you install Tailwind, PostCSS & Autoprefixer.

Then it creates your `tailwind.config.js` & `postcss.config.js` files.

### Update Several Files & Install Node Types
Pay close attention to the next few steps, since you will be updating some base files that were created during installation, and your `vite.config.ts` file.

The current formatting of the instructions is a little unclear, hopefully this will be updated. But you need to install node types as a dependency.

```
npm i -D @types/node
```

### Run the ShadCN CLI
Now that Tailwind is installed and your files are configured, it's time to run the shadcn-ui init command to setup your project.

```
npx shadcn@latest init
```

You will be asked a series of questions about your project. Answer them, then your project is configured.

## Working with ShadCN/UI

The final step of the installation shows you how to work with the UI library. 

You add Components in the Command Line, then import them into your existing App Components.

```
npx shadcn@latest add button
```

Use the button like this:

```
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}

```

## Finish Configuring Tailwind
There are still some steps for configuring Tailwind that was left out of the ShadCN installation.

Head to the [Tailwind Installation instructions](https://tailwindcss.com/docs/installation) and finish setting up Tailwind.

### Running the Tailwind Build Process
There's an important step in the Installation that shows you how to start the Tailwind Build Process, this should run as you are developing.

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

### Add Tailwind Build Process to Scripts

Since you should run this whenever you are developing, I would recommend adding this to your `package.json` scripts.

```
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "tailwind": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
  },
```

### Remove Conflicting CSS Stylesheets
The only stylesheets you should be using with Tailwind for right now are the `input.css` and `output.css` sheets.

Remove the `App.css` and `index.css` stylesheets, if they exist.

Also, look for any `.tsx` files that might be importing those stylesheets, and remove those imports.

## Working with Tailwind
If you haven't worked with Tailwind before, I would highly recommend reading their [Utility-First Fundamentals](https://tailwindcss.com/docs/utility-first) to get a better understanding about the benefits of working with Tailwind.

Overall, the benefit is not having to write so much custom CSS to style your App. By using Tailwind's established classes, you can quickly style your Application by applying their pre-built classes right inside your JSX.

The learning curve though is learning and memorizing the classes. This takes time, but as you use them the patterns emerge and it becomes easier to see how they named their classes.

### 💡Install IntelliSense for VS Code (Optional)
If you are using VSCode as your IDE, then install the official [Tailwind CSS IntelliSense extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss), so you can get autocomplete, syntax highlighting & linting.

## Next Up! - Deploy 🚀
Now that this is done, let's push this code up to [Github & Setup GitHub Pages to host your Project](3-GitHub-and-Deploy-to-GitHub-Pages.md).