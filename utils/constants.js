import dotenv from "dotenv";
dotenv.config({ path: "/home/rohitkumar/Desktop/S3_Bucket_practice/.env" });

export const Host = process.env.host;
export const User = process.env.user;
export const Password = process.env.password;
