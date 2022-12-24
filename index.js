// import Express from "express";
// import cors from "cors";
// import productRouter from "./routes/productRoute.js";
// import ReviewRouter from "./routes/reviewRoute.js";
// // import connection from "./MySqlConnection.js";

// //connection to MySql and creation of a table
// // connection.connect((err) => {
// //   if (err) throw err;
// //   console.log("connected to mysql");
// //   //   connection.query("CREATE DATABASE mydb123", function (err, result) {
// //   //     if (err) throw err;
// //   //     console.log("Database created");
// //   //   });
// // });
// //
// const app = Express();
// app.use(cors());
// app.use(Express.json());
// app.use(Express.urlencoded({ extended: false }));
// app.use("/v1", productRouter, ReviewRouter);

// app.listen(3330, () => {
//   console.log("server running at 3330");
// });
import Express from "express";
import dotenv from "dotenv";
import multer from "multer";
import aws from "aws-sdk";
import { v4 as uuidv4 } from "uuid";
//configuration
dotenv.config();
const app = Express();
const PORT = process.env.PORT;
//configuring multer
const storage = multer.memoryStorage({
  detination: " ",
});
//configuring s3
const s3 = new aws.S3({
  accessKeyId: process.env.awsId,
  secretAccessKey: process.env.awsSec,
});

const ImageUpload = multer({ storage }).  single("img");

//routes
app.get("/", (req, res) => {
  res.json({ Sucess: "Done" });
});

app.post("/upload", ImageUpload, (req, res) => {
  const myFile = req.file.originalname.split(".");
  const fileType = myFile[myFile.length - 1];

  let params = {
    Bucket: process.env.awsBucName,
    Key: `${uuidv4()}.${fileType}`,
    Body: req.file.buffer,
  };

  s3.upload(params, (error, data) => {
    if (error) {
      res.status(400).send(error);
    }
    res.status(200).json({ ImageLocation: data.Location });
  });
});

app.listen(PORT, () => {
  console.log(`connnection succ at ${PORT}`);
});
