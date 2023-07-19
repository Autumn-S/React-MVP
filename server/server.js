import express from "express";
const app = express();
import cors from "cors";
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "autumn",
});

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

// Routes
//Get all
app.get("/posts", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM posts");
    res.status(200).send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

//Get one
app.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).send("Post not found");
    }
    res.status(200).send(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// Create new post
app.post("/posts", async (req, res) => {
  try {
    const { post_title, post_author, post_date, post_new } = req.body;
    const newPost = await pool.query(
      "INSERT INTO posts (post_title, post_author, post_date, post_new) VALUES ($1, $2, $3, $4)",
      [post_title, post_author, post_date, post_new]
    );
    res.status(201).send("New post created!");
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Error creating post" });
  }
});

//Update
app.put("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { post_title, post_author, post_date, post_new } = req.body;
    const result = await pool.query(
      "UPDATE posts SET post_title = $1, post_author = $2, post_date = $3, post_new = $4 WHERE id = $5 RETURNING *",
      [post_title, post_author, post_date, post_new, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send("Post not found");
    }
    res.status(200).send(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// Delete a specific post
app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "DELETE FROM posts WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send("Post not found");
    }

    res.status(200).send("Post deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
