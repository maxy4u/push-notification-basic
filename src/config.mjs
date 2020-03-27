import dotenv from "dotenv";
dotenv.config();
export const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
export const privateVapidKey = process.env.PRIVATE_VAPID_KEY;
export const port = process.env.PORT;
