import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 10000;

// Fix __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Handle login form submission
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // For now, just simulate success (you can connect DB later)
  console.log(`Login attempt: ${username}, ${password}`);

  // Redirect to dashboard after "login"
  res.redirect("/dashboard.html");
});

// Handle signup form submission
app.post("/signup", (req, res) => {
  const { username, phone, password } = req.body;

  // Simulate saving to DB
  console.log(`Signup attempt: ${username}, ${phone}, ${password}`);

  // Redirect to dashboard
  res.redirect("/dashboard.html");
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
