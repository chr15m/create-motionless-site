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

// Use this code to do something if a particular type of file changes.
// For example if you don't want to use the Makefile you can trigger
// rebuilds here.

/* liveServer.watcher.on("change", function(changePath) {
  if (changePath.endsWith(".md")) {
    console.log(changePath);
  }
}); */

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
