import express from "express";
import exphbs from "express-handlebars";
import bodyParser from "body-parser";
import "dotenv/config";
import pgPromise from "pg-promise";

const app = express();
const pgp = pgPromise();

// ROUTES:

app.get("/", (req, res) => {
    res.send("hello world");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("app started at:", PORT);
});