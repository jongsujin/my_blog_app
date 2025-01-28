import { db } from "../../config/database/database";
import { ResponseProps, Post } from '@my-blog/types';
import { RowDataPacket } from 'mysql2';
import { SQL } from "../../sql/constants";


interface PostRow extends Omit<Post, 'tags'>, RowDataPacket {
    tags: string | null;
}



export const getPosts = async (page: number = 1, limit: number = 10): Promise<ResponseProps<Post>> => {
    try {
        const offset = (page - 1) * limit;
        const [posts] = await db.query<PostRow[]>(SQL.POST.SELECT_POSTS, [limit, offset]);
        const [countResult] = await db.query(SQL.POST.COUNT_POSTS);
        const totalCount = countResult[0].total;
      
        const formattedPosts = posts.map(post => ({
            ...post,
            tags: post.tags ? post.tags.split(',') : []
        }));

        return {
            page,
            content: formattedPosts,
            totalCount,
            hasNextPage: offset + posts.length < totalCount,
            hasPrevPage: page > 1
        };
    } catch (error) {
        throw error;
    }
}

export const getPost = async (id: number): Promise<Post> => {
    try {
        const [posts] = await db.query<PostRow[]>(SQL.POST.SELECT_POST_BY_ID, [id]);
        if (!posts[0]) throw new Error('Post not found');
        
        return {
            title: posts[0].title,
            content: posts[0].content,
            thumbnail: posts[0].thumbnail,
            id: posts[0].id,
            slug: posts[0].slug,
            tags: posts[0].tags ? posts[0].tags.split(',') : [],
            publishedAt: posts[0].published_at,
            createdAt: posts[0].created_at,
            updatedAt: posts[0].updated_at,
            viewCount: posts[0].view_count,
         
        };
    } catch (error) {
        throw error;
    }
}
