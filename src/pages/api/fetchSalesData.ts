import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/mongodb";
import sales from "@/models/SalesDataModel";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectToDatabase();

  if (!db) {
    console.error("Database connection failed");
    return res.status(500).json({ message: "Database connection failed" });
  }

  if (req.method === "GET") {
    try {
      const data = await sales.find();
      return res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching sales data:", error);
      return res.status(500).json({ message: "Error fetching sales data" });
    }
  }
}
