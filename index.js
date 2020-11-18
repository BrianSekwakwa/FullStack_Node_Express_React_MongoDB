const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

require("./routes/authRoutes")(app);

// The process.env tell heroku which environment it should declare the port on
// The boolean statement is used so that we in PRODUCTION we can use process.env but in DEVELOPMENT we can use 3000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
