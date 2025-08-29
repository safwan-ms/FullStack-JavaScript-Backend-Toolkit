import express, { Express, Response, Request, NextFunction } from "express";

const app: Express = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello. Typescript with express");
});

app.listen(port, () => {
  console.log(`Server is now running ${port}`);
});
