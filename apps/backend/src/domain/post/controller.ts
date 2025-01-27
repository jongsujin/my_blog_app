import {Request, Response } from "express";
import { getPostService } from "./service";

export const getPostController = async (req: Request, res: Response) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const posts = await getPostService(page, limit);
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error in getPostController:', error);
        res.status(500).json({ message: 'Failed to fetch posts' });
    }
}