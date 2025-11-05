import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 10000;

// Fix __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Handle signup form submission
app.post("/signup", (req, res) => {
  const { username, phone, password, confirmPassword } = req.body;
  console.log("Signup Data:", req.body);

  // For now, just redirect to login (you can replace this with database logic)
  res.redirect("/login.html");
});

// Handle login form submission
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("Login Data:", req.body);

  // For now, just redirect to dashboard
  res.redirect("/dashboard.html");
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
