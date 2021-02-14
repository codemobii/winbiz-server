const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// create express app
const app = express();

app.use(cors());

// require database connection
const dbConnect = require("./db/db.connect");

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Require routes
require("./routes/product.routes")(app);
require("./routes/user.routes")(app);
require("./routes/transaction.routes")(app);

// define a simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome Learntor App Server",
  });
});

// listen for requests
app.listen(process.env.PORT || 7000, () => {
  console.log("Server is listening on port 7000");
});

// execute database connection
dbConnect();
