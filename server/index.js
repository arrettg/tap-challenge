require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const {
  getProducts,
  getProduct,
  addLike,
  dislike
} = require("./productController");

const app = express();

const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET
  })
);
massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("connected for sure");
  })
  .catch(error => console.log(error));

//product endpoints
app.get("/api/products", getProducts); //reads all products in the table
app.get("/api/products/:id", getProduct); //reads specific product
app.put("/api/products/:id", addLike); //increases likes by 1
app.delete("/api/products/:id", dislike); //decreases likes by 1

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));
