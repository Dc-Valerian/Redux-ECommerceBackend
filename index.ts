import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import AllRoute from "./Controller/AllController";
const port = 4573;
const url = "mongodb://localhost/set07Ecomerce";
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(url).then(() => {
	console.log("Database Connection Established");
});

app.use("/api", AllRoute);

app.listen(port, () => {
	console.log("")
	console.log("listening on port", port);
});
