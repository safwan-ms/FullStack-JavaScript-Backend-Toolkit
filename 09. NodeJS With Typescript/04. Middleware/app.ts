import { Request, Response, NextFunction } from "express";

interface CustomRequest extends Request {
  startTime?: number;
}

const app: Express = express();
const port = 3000;

app.use(express.json());

app.use((req: CustomRequest, res: Response, next: NextFunction) => {
  req.startTime = Date.now();
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello. Typescript with express");
});

app.listen(port, () => {
  console.log(`Server is now running ${port}`);
});
