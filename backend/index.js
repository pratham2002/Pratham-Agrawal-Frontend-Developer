const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const users = [
  {
    id: 1,
    username: "user1",
    email: "demo@demo.com",
    password: "password", // Hashed "password1"
  },
];

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "DELETE", "PATCH", "POST"],
    credentials: true,
  })
);

const PORT = 3001;

const SECRET_KEY = "ABCDE";

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is Successfully Running at Port " + PORT);
  } else {
    console.error("Error occurred, server can't start");
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Email or password is required" });
  }
  const user = users.find((u) => u.email === email);

  if (!user || password !== user.password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY);
  return res.json({ token });
});
