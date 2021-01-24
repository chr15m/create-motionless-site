#!/usr/bin/env node

const server = require("live-server");
const path = require("path");
const fs = require("fs");

// start the live-reloading server instance
// for more params and options:
// https://github.com/tapio/live-server/#usage-from-node

server.start({
  port: 8000, // run on port 8000
  root: __dirname + "/public", // serve the public folder
  watch: __dirname, // watch all files from the current dir down
  open: false, // don't open a browser window
  //ignore: 'scss,my/templates', // comma separated paths to ignore
  // wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
  //mount: [['/components', './node_modules']], // Mount a directory to a route.
  logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
  middleware: [redirectToHTMLFiles] // you can add more middleware functions in here
});

// This middleware ensures that HTML files can be browsed
// without using the .html extension.

function redirectToHTMLFiles(req, res, next) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    next();
  }
  if (req.url !== '/' &&
      path.extname(req.url) === '' &&
      fs.existsSync(path.join(__dirname, "public", req.url + ".html"))) {
    res.statusCode = 302;
    res.setHeader('Location', req.url + '.html');
    res.end();
  } else {
    next();
  }
}

// watch for changes to this script itself and exit to restart it

server.watcher.on("change", function(changePath) {
  if (changePath == __filename) {
    console.log(__filename.split("/").pop() + " changed, respawning.");
    process.exit();
  }

  // you can add other file types in here if you want
  // specific things to happen when certain types of files change
  // e.g. if (changePath.endsWith(".scss")) { ... }
  // or you can add to the Makefile
});
