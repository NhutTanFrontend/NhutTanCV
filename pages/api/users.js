import db from "../../src/database/database";

export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      const users = db.prepare("SELECT * FROM users").all();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  } else if (req.method === "POST") {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    try {
      const insert = db.prepare(
        "INSERT INTO users (name, email) VALUES (?, ?)"
      );
      const result = insert.run(name, email);

      const newUser = { id: result.lastInsertRowid, name, email };
      res.status(201).json(newUser);
    } catch (error) {
      if (error.code === "SQLITE_CONSTRAINT") {
        res.status(400).json({ error: "Email already exists" });
      } else {
        console.error(error);
        res.status(500).json({ error: "Failed to add user" });
      }
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
