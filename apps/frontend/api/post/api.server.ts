"use server"
import { API, APIError } from "../instance"

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