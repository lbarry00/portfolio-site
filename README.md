# Portfolio Website

A website where I can put my stuff! 

Built with React, uses Airtable for data storage, and served via ExpressJS. 

Find it live on: https://lbarry.dev/


## Notable Dependencies

* Node.js
* React
* Express.js
* [Airtable](https://airtable.com/)
* Sass
* PM2
* Nodemon


## NPM Scripts

### `react-dev` / `start`

`react-scripts start`

It's just `npm start` re-named for consistency. Starts up the React app in dev mode. 

Starts on: `localhost:3000`


### `server-dev`

`nodemon -r dotenv/config server.js`

Starts up the Express server in dev mode. 

Requires a `.env` file with the `PORT` environment variable set, otherwise the server will start on `443`.

Starts on: `localhost:PORT`


### `build`

`react-scripts build`

Bundles all of the React front-end into production-ready files and outputs to `/build`.


### `prod`

`pm2 start server.js`

Starts the express webserver using the PM2 daemon. For deploying website in production. Run `build` first. 