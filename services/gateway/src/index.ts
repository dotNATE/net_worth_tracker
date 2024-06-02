import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT_NUM || 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Gateway success")
});

app.listen(port, () => {
    console.log(`[gateway] is running on port ${port}`);
})