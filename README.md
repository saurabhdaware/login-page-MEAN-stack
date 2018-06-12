# LoginPageMEANStack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

This is a simple login page made with MEAN stack (MongoDB, ExpressJS, Angular 6, NodeJS).
## This project includes:
- User registration.
- User login.
- User Authorization.

## Basic working of login page
1. When user enters email and password and when both of them are correct we return an access token (generated with jwt)
2. This access token is stored in localstorage of the browser.
3. Now if user leaves the page and opens the same site again we check to see if there is any access token present in user's localstorage.
4. if access token is present - > we verify that access token and redirect user to the profile page.
5. if access token is not present - > we keep user on the same page.

## About Directories
- NodeJS and ExpressJS is inside `restApi/`
- MongoDB database is in `user_db/`
- Angular Components are in `src/app`

## Prerequisites to understand the project
- MEAN stack (Angular 2+)
- ES6 Javascript (specially promises)
- JWT: Json Web Token it is a libray to generate random token it has 2 function jwt.sign() to create token and jwt.verify() to verify
- bcrypt - Library to hash passwords, I've used two functions in this project bcrypt.hash() to hash password and bcrypt.compare to compare string with hashed password.

## Tools / Libraries / Softwares required.
1. Install [npm](https://nodejs.org/) and Angular Client `npm install @angular/cli` (ignore if already installed)
2. In command prompt type `npm install` to download starter packages.
3. `cd restApi` and type `npm install bcrypt,jsonwebtoken,mongoose,express`
4. Install [MongoDB](http://www.mongodb.com/)
5. Go to bin folder in your mongodb directory, Mine is in `c:/program files/mongodb/server/3.6/bin` and type `mongostore <path of user_db folder>`

## How to Run
1. Change directory to your project and `ng serve` to start angular server
2. Change directory to bin folder of your mongodb installation folder, Mine is `c:/program files/mongodb/server/3.6/bin` and type `mongod` then open new command prompt and type `mongo`
3. Change directory to `restApi/` and type `node index.js` to start Node Server

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
