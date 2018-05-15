# webpack-boilerplate
Webapp boilerplate using Webpack 4 for bundling, task running etc.  It comes with a few base SCSS files and a JS test runner as well.

## How to use
* Start dev build in server and watch with `npm start` (will automatically navigate to `localhost:8080`)
* Single dev build only with `npm run dev`
* Production build with `npm run build`
* From the root folder, `npm test` will execute all the tests tests directory

## Notes and stuff this does:
* Work on product from `/src` directory
* View product and changes from the `/dist` directory
* Source maps are generated for SCSS and JS
* SCSS compiled to CSS on build
* JS transpiled to ES5 on build
* Prod build minifies JS
* Browser auto refresh on HTML/CSS/JS update
* CSS autoprefixer on save

## Anything else?
* Sometimes Node goes wrong and throws an "Error: 'sass-loader' requires 'node-sass' >=4".  You can run `npm run unbreak` to resolve this.