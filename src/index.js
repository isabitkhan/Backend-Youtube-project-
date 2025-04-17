import dotenv from "dotenv";
import connectDB from "./db/index.db.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server is runing on port ${process.env.PORT || 8000}`)
    );
  })
  .catch((error) => console.log(`Mongo DB connection Failed !! `, error));
