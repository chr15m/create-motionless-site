#!/usr/bin/env node

const args = process.argv.slice(2);
const exec = require('child_process').exec;
const fs = require('fs-extra');
const replace = require('replace-in-file');

const name = args[0];
const dir = name && args[0].replace(/-/g, '_');

if (name) {
  fs.copySync(__dirname + "/template", name);
  fs.moveSync(name + "/gitignore", name + "/.gitignore");
  replace.sync({
    "files": [
      args[0] + "/**/**",
    ],
    "from": "NAME",
    "to": name,
    "countMatches": true,
  });
  exec("cd " + name + "; git init");
} else {
  console.log("Usage: motionless-site APP-NAME");
}
