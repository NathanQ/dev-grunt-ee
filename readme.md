# dev-grunt-ee for ExpressionEngine development

dev-grunt-ee is a basic Grunt configuration that allows the developer to work on their static templating outside of the ExpressionEngine project environment. It handles SASS compilation and CSS and JavaScript minification and ports the style and scripts into the project.

## Install

To get started, clone this repo alongside the project and install the dependencies with "npm install."  Refer to [getting started with Grunt](http://gruntjs.com/getting-started#working-with-an-existing-grunt-project) in order to compile and change to fit your needs.

## Directories

The Gruntfile is written to watch files within the dev_assets directory and write to dev_assets/css, html/css, and html/js. The dev_assets/css stylesheet is Sass to css and includes Sass file names and line numbers which is handy in development. The html/css and html/js are minified for production.

dev-grunt-ee
--dev_assets
----sass
----scripts

html
--css
--scripts