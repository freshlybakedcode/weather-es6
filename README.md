# Another weather app
A weather app in ES6 using modules and the like

## How to use
* Start dev build in server and watch with `npm start` (will automatically navigate to `localhost:8080`)
* Single dev build only with `npm run dev`
* Production build with `npm run dist`
* From the root folder, `npm test` will execute all the tests in the tests directory and then keep watch of the relevant files

## Notes and stuff this does:
* Work on product from `/src` directory
* View product and changes from the `/dist` directory
* Source maps are generated for SCSS and JS
* SCSS compiled to CSS on build
* JS transpiled to ES5 on build
* Prod build minifies JS and CSS
* Browser auto refresh on HTML/CSS/JS update
* CSS autoprefixer on save
* Mocha for testing with Node assert lib

## Anything else?
* Sometimes Node goes wrong and throws an _"Error: 'sass-loader' requires 'node-sass' >=4"_.  You can run `npm run unbreak` to resolve this.