import { publicVapidKey, privateVapidKey, port } from "./config.mjs";
import webpush from "web-push";
import express from "express";
import bodyParser from "body-parser";
import serve from "express-static";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, "/dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

// configure webpush module with your vapid
webpush.setVapidDetails(
  "mailto:khurana.g@hotmail.com",
  publicVapidKey,
  privateVapidKey
);

// create express app with some endpoints

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(HTML_FILE); // EDIT
});

app.post("/subscribe", (req, res) => {
  const subscription = req.body;
  res.status(201).json({});
  const payload = JSON.stringify({ title: "test" });

  console.log(subscription);
  webpush.sendNotification(subscription, payload).catch(error => {
    console.error(error.stack);
  });
});
app.use(serve(DIST_DIR));

app.listen(port, () => {
  console.log("server is listening at ", port);
});
