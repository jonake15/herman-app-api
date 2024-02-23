const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");

// Routes
const BookRoute = require("./routes/api/books");
const HouseRoute = require("./routes/api/houses");
const HomeRoute = require("./routes/api/homes");
const UserRoute = require("./routes/api/users");

const app = express();

// use the cors middleware with the
// origin and credentials options
app.use(
  cors({ origin: "https://herman-app.onrender.com/", credentials: true })
);

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//cookie and session middleware
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

// use the routes module as a middleware
// for the /api/books path
app.use("/api/books", BookRoute);
app.use("/api/house", HouseRoute);
app.use("/api/users", UserRoute);
app.use("/api/home", HomeRoute);
// Connect Database
connectDB();

app.get("/", (req, res) => res.send("Hello world!"));
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
