const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("Access Token: ", accessToken);
      console.log("Refresh Token: ", refreshToken);
      console.log("Profile: ", profile);
    }
  )
);

app.get(
  "/auth/google/",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));

// The process.env tell heroku which environment it should declare the port on
// The boolean statement is used so that we in PRODUCTION we can use process.env but in DEVELOPMENT we can use 3000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
