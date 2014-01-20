# Getting started
## Dependencies
I would recomend installing as much as possible without using `sudo`.

- Node.js
- Git
- Ruby
- Compass

## After fetching from github
Write these commands in the terminal.

        $ bundle install
        $ bower install
        $ npm install

## Development build
For now it is only configured a build for development. Write the following command in the terminal. A browser should be opened automaticly.

        $ grunt

Css changes will be automaticly injected, and changes in jekyll templates will be updated when refreshing your browser. 

Additionally browse-sync will make it possible to visit your site trough other browsers and devices if they are on the same local network. Navigating, scrolling and filling out forms will also be synced between connected browsers.