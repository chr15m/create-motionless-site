const m = require("motionless");

// load template
const t = m.dom(m.load("template.html"));

// load content
const content = m.load(process.argv[2]);

// get a reference to the <main> tag in the document
const dest = t.$("main");

const title = content.split("\n")[0].replace("#", "");

// convert the markdown to an HTML string and set
// the content of the body tag to it
dest.innerHTML = m.md(content);

// set the title of the page
t.$("title").textContent = title;

/*
// example: build a table of contents

// get a list of the h2 headers in the page
const headers = t.$$("h3");

if (headers.length) {
  // build a list of <li> tags with an <a> link for every header
  const items = headers.map((h3)=>{
    // add a named href the TOC can link to
    h3.appendChild(t.h("a", {"className": "pilcrow", "name": m.slug(h3.textContent)}, " "))
    // create the TOC <li> link tag
    return t.h("li", {}, t.h("a", {"href": "#" + m.slug(h3.textContent)}, h3.textContent));
  });
}*/

m.save(process.argv[3], t.render());
