import express, { ErrorRequestHandler, Request, Response } from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import Post from "../models/post";

dotenv.config();

const AIRoutes = express.Router();

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openAI = new OpenAIApi(config);

AIRoutes.route("/").post(async (req: Request, res: Response) => {
  const { prompt } = req.body;

  try {
    const aiRes = await openAI.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = aiRes.data.data[0].b64_json;

    res.status(200).json({ photo: image});
  } catch (error: any) {
    console.log(error);
    res.status(500).send(error?.response.data.message ?? 'Error')
  }
});

export default AIRoutes;
