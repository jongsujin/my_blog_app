"use server"
import { API, APIError } from "../instance"
import {  Post, PostInitial } from '@my-blog/types';


export const getPosts = async (page: number, limit: number) => {
    try {
        const response = await fetch(`${API.baseURL}/api/posts?page=${page}&limit=${limit}`, {
            method: "GET",
            headers: API.headers,
        })
        const data = await response.json();
        return data;
    } catch (error) {
        throw new APIError(500, "Failed to fetch posts");
    }
}

export const getPostById = async (id: number) => {
    try {
        const response = await fetch(`${API.baseURL}/api/posts/${id}`, {
            method: "GET",
            headers: API.headers,
        })
        const data : Post = await response.json();
        return data;

    } catch (error) {
        throw new APIError(500, "Failed to fetch post");
    }
}


export const createPost = async (post: PostInitial) => {
    try {
        const response = await fetch(`${API.baseURL}/api/posts`, {
            method: "POST",
            headers: API.headers,
            body: JSON.stringify(post)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw new APIError(500, "Failed to create post");
    }
}