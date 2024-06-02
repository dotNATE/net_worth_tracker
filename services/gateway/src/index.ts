import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT_NUM || 3000;

app.get("/", async (req: Request, res: Response) => {
    let value = await fetch('http://blob:3001')
    let response = JSON.parse(await value.text());

    res.send(response);
});

app.listen(port, () => {
    console.log(`[gateway] is running on port ${port}`);
})