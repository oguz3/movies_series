import { NextApiRequest, NextApiResponse } from "next";
import { sampleData } from "@data/sample";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(sampleData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
