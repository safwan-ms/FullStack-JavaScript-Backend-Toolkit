import express, { Express, Request, Response } from "express";

interface UserType {
  name: string;
  email: string;
}

const app: Express = express();
const port = 3000;

app.post("/user", (req: Request<{}, {}, UserType>, res: Response) => {
  const { name, email } = req.body;
  res.json({
    message: `User created ${name}-${email}`,
  });
});

app.listen(port, () => {
  console.log(`Server is now running ${port}`);
});
