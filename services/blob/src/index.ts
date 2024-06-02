import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT_NUM || 3001;

app.get("/", (req: Request, res: Response) => {
    res.send({ success: true });
});

app.listen(port, () => {
    console.log(`[blob] is running on port ${port}`);
});