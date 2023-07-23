const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./middleware/authenticate");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());

const users = [
  {
    id: 1,
    username: "user1",
    email: "demo@demo.com",
    password: "password",
  },
]; //temporary user...this should be from db

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "DELETE", "PATCH", "POST"],
    credentials: true,
  })
);

const PORT = 3001; //should be from env file

const SECRET_KEY = "ABCDE"; //should be added to a env file

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is Successfully Running at Port " + PORT);
  } else {
    console.error("Error occurred, server can't start");
  }
});

// all the status code should be maintained into a separate file with proper error message

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Email or password is required" });
  }
  const user = users.find((u) => u.email === email);

  if (!user || password !== user.password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY);
  return res.json({ token });
});

app.use(authenticateToken);

app.get("/capsules", async (req, res) => {
  try {
    const BASE_URL = "https://api.spacexdata.com/v3/capsules"; //should be added to a env file

    const {
      capsule_serial,
      capsule_id,
      status,
      original_launch,
      mission,
      landings,
      type,
      reuse_count,
      limit = 10,
      offset = 0,
    } = req.query;

    // Create an object to hold the query parameters for the Axios request
    const queryParams = {
      limit,
      offset,
    };

    // Add query parameters to the object if they are present in the request
    if (capsule_serial) queryParams.capsule_serial = capsule_serial;
    if (capsule_id) queryParams.capsule_id = capsule_id;
    if (status) queryParams.status = status;
    if (original_launch) queryParams.original_launch = original_launch;
    if (mission) queryParams.mission = mission;
    if (landings) queryParams.landings = landings;
    if (type) queryParams.type = type;
    if (reuse_count) queryParams.reuse_count = reuse_count;
    // console.log({ queryParams });
    const { data } = await axios.get(BASE_URL, {
      params: queryParams,
    });

    return res.json({ message: "This is a protected route", data: data });
  } catch (error) {
    return res.status(500).json({ message: "Something Went Wrong" });
  }
});
