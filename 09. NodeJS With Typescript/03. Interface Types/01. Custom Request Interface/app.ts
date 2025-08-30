import express{ Request, Express } from "express";

interface CustomRequest extends Request {
  startTime?: number;
}

const app: Express = express();


app.use((req: CustomRequest, res: Response, next: NextFunction) => {
  req.startTime = Date.now();
  next();
});



app.listen(port, () => {
  console.log(`Server is now running ${port}`);
});
