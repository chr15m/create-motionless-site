# Build a list of source Markdown files and destination HTML
MARKDOWN_FILES=$(shell cd pages; ls *.md)
GENERATED_HTML=$(foreach F,$(MARKDOWN_FILES),public/$(F:.md=.html))

all: public/index.html $(GENERATED_HTML)

# Rule to make index.html from README.md
public/index.html: README.md node_modules
	node make-page.js $< $@

# Rule to turn any Markdown file in pages/
# into an HTML file in public/
public/%.html: pages/%.md template.html make-page.js node_modules
	node make-page.js $< $@

# Rule to make sure node_modules are installed
node_modules: package.json
	npm i && touch node_modules

### Rules for live serving and watching ###

.PHONY: watch serve watcher clean

serve: node_modules
	./dev-server.js

watcher:
	while true; do $(MAKE) --silent -q || ( $(MAKE) || sleep 2 ); sleep 0.1; done

watch:
	make --silent -j2 serve watcher

clean:
	rm -rf public/*.html node_modules
