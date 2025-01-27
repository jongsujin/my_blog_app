import { db } from "../../config/database/database";
import { ResponseProps, Post } from '@my-blog/types';
import { RowDataPacket } from 'mysql2';
import { SQL } from "../../sql/constants";

interface PostRow extends Post, RowDataPacket {}



export const getPosts = async (page: number = 1, limit: number = 10): Promise<ResponseProps<Post>> => {
    try {
        const offset = (page - 1) * limit;
        const [posts] = await db.query<PostRow[]>(SQL.POST.SELECT_POSTS, [limit, offset]);
        const [countResult] = await db.query(SQL.POST.COUNT_POSTS);
        const totalCount = countResult[0].total;

        return {
            page,
            content: posts,
            totalCount,
            hasNextPage: offset + posts.length < totalCount,
            hasPrevPage: page > 1
        };
    } catch (error) {
        throw error;
    }
}