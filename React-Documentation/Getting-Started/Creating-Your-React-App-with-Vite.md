You can use React's [Create React App](https://create-react-app.dev/) in the command line to create your React App, or you can use **Vite** to create your App. 

[Vite](https://vite.dev/) is becoming popular, since it creates smaller bundle sizes and with auto-update the DOM with your file changes by using [Hot Module Replacement](https://vite.dev/guide/features.html#hot-module-replacement). This is preconfigured when you use Vite to create your React application. Very handy 🙌

In the command line, create your application with Vite
```
npm create vite@latest
```

>If you don't have Vite installed, then you will be asked to install it.

You will be asked to choose your Javascript framework, choose React.

Then you will be asked to choose your Javascript variant. I would recommend going with **Typescript**, since this skill is in-demand. And it would be good to get used to working with data types, since you will probably encounter this with any professional work you do.

Also, there's the option for Typescript + SWC.
This is [**S**peedy **W**eb **C**ompiler](https://swc.rs/), a "Rust-based platform for the Web.

>I would not recommend using this now, it would provide a performance boost to your application, but when you are just getting started, I would just stick with Typescript, and look into the feature of SWC when it comes time to build a larger application.

After Vite creates your App, then CD into the Project Folder, and run `npm install`.

Then when all of the Node Packages have been installed, run your app:
```
npm run dev
```

Vite will run your project locally, and show you were the site is hosted, it should be:
[http://localhost:5173](http://localhost:5173)

Open that link in your browser, and you should see your React App running
![[vite-and-react.png]]
You can click on the button and it will show the click count. If you look into `App.tsx`, you will see the `onClick` function within the button element.

```tsx
<button onClick={() => setCount((count) => count + 1)}>
	count is {count}
</button>
```

