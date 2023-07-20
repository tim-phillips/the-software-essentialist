import express from "express";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

import { createUser, UserCreateInput } from "./UserModel";
import { createUserError, createUserSuccess } from "./UserView";

const PORT = 3030;

const app = express();

app.use(express.json());

app.post("/users/new", async (req, res) => {
  // TODO validate input
  const user: UserCreateInput = {
    ...req.body,
    password: "test",
  };

  try {
    const newUser = await createUser(user);
    const body = createUserSuccess(newUser);
    res.statusCode = 201;
    res.send(body);
  } catch (err) {
    // TODO move to error handler
    let errorName = "UnknownError";
    if (err instanceof PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        res.statusCode = 409;
        if (Array.isArray(err.meta?.target)) {
          if (err.meta?.target.includes("username")) {
            errorName = "UsernameAlreadyTaken";
          } else if (err.meta?.target.includes("email")) {
            errorName = "EmailAlreadyInUse";
          }
        }
      }
    }
    const body = createUserError(errorName);
    res.send(body);
  }
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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
