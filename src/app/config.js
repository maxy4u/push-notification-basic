import dotenv from "dotenv";
dotenv.config();
const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;
const port = process.env.PORT;
export { port, publicVapidKey, privateVapidKey };
