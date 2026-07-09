import express from "express";
import { readFileSync } from "fs";
import { createServer as createHttpServer } from "http";
import { createServer as createHttpsServer } from "https";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const httpPort = process.env.HTTP_PORT || 80;
const httpsPort = process.env.HTTPS_PORT || 443;
const useSecure = process.env.USE_HTTPS === "true";

const app = express();

createHttpServer(app).listen(httpPort, () => {
  console.log(`HTTP server is running on port ${httpPort}`);
});

if (useSecure) {
  const certFiles = {
    key: readFileSync("key.pem"),
    cert: readFileSync("cert.pem")
  };

  createHttpsServer(certFiles, app).listen(httpsPort, () => {
    console.log(`HTTPS server is running on port ${httpsPort}`);
  });

  // try redirect all HTTP to HTTPs
  app.use((req, res, next) => {
    if (!req.secure) {
      res.redirect(`https://${req.hostname}/${req.url}`);
    } else {
      next();
    }
  });
}

app.use(express.static(join(__dirname, "dist")));

app.get("/{*splat}", (req, res) => {
  res.sendFile(join(__dirname, "dist/index.html"));
});
