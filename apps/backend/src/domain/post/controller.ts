import {Request, Response } from "express";
import { createPostService, getPostByIdService, getPostService } from "./service";

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

export const getPostByIdController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const post = await getPostByIdService(id);
        res.status(200).json(post);
    } catch (error) {
        console.error('Error in getPostByIdController:', error);
        res.status(500).json({ message: 'Failed to fetch post' });
    }
}

export const createPostController = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        console.log('Request body:', body);
        const newPost = await createPostService(body);
        res.status(201).json({message: 'Post created successfully', post: newPost});
    } catch (error) {
        console.error('Error in createPostController:', error);
        res.status(500).json({message: 'Failed to create post'});
    }
}