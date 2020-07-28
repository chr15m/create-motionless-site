Quickly get a shadow-cljs + Reagent project up and running.

How to use this:

```
npm i shadowfront YOUR-APP-NAME
cd YOUR-APP-NAME
make watch
```

Once shadow-cljs finishes compiling the project for the first time open these pages in your browser:

 * http://localhost:8000/ <- the running app
 * http://http://localhost:9630/ <- shadow-cljs debugging console

> (tip: use `(tap> ...)` in your code to have a value show up in the "inspect" pane.

Then open `src/YOUR-APP-NAME/core.cljs` in your editor and start hacking. 👍

# Build

To make a static release that you can publish on a hosting service:

```
make build
```

This will copy everything in `public/` to the `build` folder and also build the main js artifact in there.
