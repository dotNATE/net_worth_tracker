import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT_NUM || 3000;

app.get("/", async (req: Request, res: Response) => {
    let value;
    try {
        value = await fetch('http://127.0.0.1:3001')
    } catch (err) {
        console.error(err);
    }
    if (value) console.log({ value });
    res.send("Attempt number 3")
});

app.listen(port, () => {
    console.log(`[gateway] is running on port ${port}`);
})