import express, { Express, Request, Response } from 'express';
import rateLimit, { RateLimitRequestHandler } from 'express-rate-limit';
import helmet from 'helmet';

const app: Express = express();
const port: number = parseInt(process.env.HTTP_PORT as string) || 3000;

const limiter: RateLimitRequestHandler = rateLimit({
	windowMs: 5 * 60 * 1000, // 5 minutes
	max: 20, // 20 requests per IP over windowMs
	standardHeaders: true
});

app.use(helmet());
app.use(limiter);
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ status: "online" });
});

app.post('/join', (req: Request, res: Response) => {

});

app.listen(port, () => {
  console.log(`[HERMES] HTTP server started on port ${port}`);
});