import { publicVapidKey, privateVapidKey, port } from "./config.js";
import webpush from "web-push";
import express from "express";
import bodyParser from "body-parser";
import serve from "express-static";

// configure webpush module with your vapid
webpush.setVapidDetails(
  "mailto:khurana.g@hotmail.com",
  publicVapidKey,
  privateVapidKey
);

// create express app with some endpoints

const app = express();
app.use(bodyParser.json());

app.post("/subscribe", (req, res) => {
  const subscription = req.body;
  res.status(201).json({});
  const payload = JSON.stringify({ title: "test" });

  console.log(subscription);
  webpush.sendNotification(subscription, payload).catch(error => {
    console.error(error.stack);
  });
});

app.use(serve("./"));

app.listen(port, () => {
  console.log("server is listening at ", port);
});
