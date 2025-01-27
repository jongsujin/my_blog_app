import { getPost, getPosts } from "./repository";

export const getPostService = async (page: number, limit: number) => {
    try {
        const posts = await getPosts(page, limit);
        return posts;
    } catch (error) {
        throw new Error('Failed to fetch posts');
    }
}

export const getPostByIdService = async (id:number) => {
    try {
        const post = await getPost(id);
        return post;
    } catch (error) {
        throw new Error('Failed to fetch post');
    }
}