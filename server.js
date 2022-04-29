const express = require('express');
const https = require("https");
const fs = require("fs");
const path = require('path');

const app = express();

console.log("Starting up express server...")

var port = process.env.PORT || 443;

https
  .createServer(
      {
        key: fs.readFileSync("key.pem"),
        cert: fs.readFileSync("cert.pem"),
      },
      app
  )
  .listen(port, () => {
    console.log("Server is running at port " + port);
  });



// Setup endpoints for portfolio site and project demo sub-pages
// ----- Portfolio homepage
// NOTE other paths (/projects and /about) are handled via React-Router so not needed here
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// ----- Project demo endpoints
app.use(express.static(path.join(__dirname, "build")));
app.use(express.static(path.join(__dirname, "build", "starbird"), {
    extensions: ['html', 'htm']
}));
app.use(express.static(path.join(__dirname, "build", "pokeweb"), {
    extensions: ['html', 'htm']
}));
app.use(express.static(path.join(__dirname, "build", "bombflip"), {
    extensions: ['html', 'htm']
}));

// ----- BombFlip game demo endpoints
app.get("/bombflip", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "bombflip", "bombflip.html"));
});
app.get("/bombflip/play", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "bombflip", "game.html"));
});
app.get("/bombflip/tutorial", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "bombflip", "tutorial.html"));
});

// ----- Pokeweb site demo endpoint
// NOTE only need the one since it's a single-page react app)
app.get("/pokeweb", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "pokeweb", "pokeweb.html"));
});

// ----- Starbird game demo endpoints
app.get("/starbird/about", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "starbird", "design.html"));
});
app.get("/starbird/resources", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "starbird", "resources.html"));
});
app.get("/starbird", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "starbird", "starbird.html"));
});