const express = require('express');
const path = require('path');
const app = express();

console.log("Starting up express server...")

// setup static paths
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

// ----- Portfolio homepage
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

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

// ----- Pokeweb site demo endpoint (only need the one since it's a single-page react app)
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

// start listening
app.listen(process.env.PORT || 5000), () => console.log("Server started listening on port " + port + ".");
