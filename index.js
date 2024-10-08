import express from "express";
import User from "./models/user.model.js";
import { connectDB } from "./db.js";

const app = express();
app.use(express.json());

// Basic CRUD routes
app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const newUser = await User.create({ name, email });
  res.json(newUser);
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = await User.findByPk(id);
  if (user) {
    user.name = name;
    user.email = email;
    await user.save();
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (user) {
    await user.destroy();
    res.json({ message: "User deleted" });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

const port = 3000;
connectDB()
  .then(() => {
    console.log("Database connected");
    // Start the server and listen on the defined port
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
