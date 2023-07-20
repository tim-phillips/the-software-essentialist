import express from "express";

const app = express();
const port = 3030;

app.post("/users/new", (req, res) => {
  const user = req.body;
  console.log({ user });

  // TODO create a new user

  res.send("user 1");
});

app.post("/users/edit/:userId", (req, res) => {
  const { userId } = req.params;
  const user = req.body;
  console.log({ userId, user });

  // TODO replace an existing user

  res.send("user 2");
});

app.get("/users", (req, res) => {
  const { email } = req.query;
  console.log({ email });

  // TODO lookup email in db
  // TODO return email

  res.send("user 3");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
