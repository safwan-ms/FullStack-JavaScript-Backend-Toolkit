import express, { Express, Response, Request, NextFunction } from "express";
import { IUser, User } from "./models/User.js";

const app: Express = express();
const port = 3000;

app.get("/users", async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await User.find({});
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error instanceof Error ? error.message : "Unknown Error",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is now running ${port}`);
});
