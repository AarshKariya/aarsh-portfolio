// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const PROJECTS = await prisma.pROJECTS.findMany();

    res.status(200).json({ projects: PROJECTS });
  } else if (req.method === "POST") {
    const details = req.body;
    console.log("details", details);
    const createdProject = await prisma.pROJECTS.create({
      data: {
        title: details.title,
        description: details.description,
      },
    });
    res.status(200).json({ projects: createdProject });
  }
}
