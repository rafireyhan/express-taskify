const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config({path: `.env`});

//Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

//PORT
const port = process.env.PORT || 3001;

//Listen PORT
app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

//Database, MongoURL
const mongoURL = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`;

//Database Connection
mongoose.connect(mongoURL);
let db = mongoose.connection;
db.on("error", console.error.bind(console, "Koneksi Database Gagal!"));
db.once("open", () => {
    console.log("Database Berhasil Terkoneksi!");
})