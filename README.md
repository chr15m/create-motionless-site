This is a nodejs template for setting up a static website using [motionless](https://github.com/chr15m/motionless).
You get a site built from Markdown, CSS, and an HTML template, and a live-reloading dev server that will update the site as you build it.

# Quick start

```
npm init motionless-site YOUR-APP-NAME
cd YOUR-APP-NAME
```

Then start the live-reloading dev server:

```
make watch
```

Now open <http://localhost:8000/> in your browser.

## Files

 * `template.html` is the basic template for this site. It's a regular HTML file with no special syntax.
 * `public/style.css` contains the styles for the generated site. It's a regular CSS file with no special syntax.
 * `README.md` and `pages/test-page.md` are source Markdown files. They are merged with the template to create the HTML file in `public`. You can put more `*.md` files in `pages` and they'll get turned into HTML pages.
 * `make-page.js` builds the pages using the motionless library. It is called by the `Makefile` both in development mode (`make watch`) and production mode (`make`).
 * `Makefile` defines the rules for building the website. It uses `make-page.js` to build pages and `dev-server.js` to run a development server.
 * `dev-server.js` is a simple live-reloading web server. Edit this if you want to change the way files are served in development mode.

# Production build

To make a release that you can publish on a static hosting service just run `make` once.
This will build the site into the `public` folder.
