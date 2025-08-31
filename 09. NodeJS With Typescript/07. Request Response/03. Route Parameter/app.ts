import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

app.get("/user/:id", (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  res.json({
    userId: id,
  });
});

app.listen(port, () => {
  console.log(`Server is now running ${port}`);
});
