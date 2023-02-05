const express = require('express');
const https = require("https");
const http = require('http');
const fs = require("fs");
const path = require('path');

console.log("Starting up express server...")

const app = express();

const httpsPort = process.env.PORT || 443;
const httpPort = process.env.HTTP_PORT || 80;
var certFiles = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
}

https
  .createServer(certFiles, app)
  .listen(httpsPort, () => {
      console.log("HTTPS is running at port " + httpsPort);
  });

http
  .createServer(app)
  .listen(httpPort, () => {
    console.log("HTTP is running on port " + httpPort);
  });

// Handle HTTP redirects: redirect all HTTP to HTTPs, redirect old domain to new
app.use((req, res, next) => {
  if (!req.secure) {
    res.redirect('https://' + req.hostname + "/#" + req.url);
  } else {
    next();
  }
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