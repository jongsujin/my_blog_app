import { db } from "../../config/database/database";
import { ResponseProps, Post, PostInitial, Tag } from '@my-blog/types';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

export const createPost = async (post: PostInitial): Promise<Post> => {
   return await db.transaction(async (connection) => {
    // 1. 포스트 생성
    const [postResult] = await connection.query<ResultSetHeader>(SQL.POST.INSERT_POST, [
        post.title,
        post.content,
        post.slug,
        post.thumbnail,
        new Date(),  // published_at
        new Date(),  // created_at
        new Date(),  // updated_at
        0  // view_count
    ]);
    const postId = postResult.insertId;
    // 2. 태그 처리
    if(post.tags && post.tags.length > 0) {
        // 기존 태그 ID 조회
        const [tagRows] = await connection.execute(
            'SELECT id FROM tags WHERE name IN (?)',
            [post.tags]
        );
        const tagValues = (tagRows as Tag[]).map(tag => [postId, tag.id]);
        if(tagValues.length > 0) {
            await connection.execute(SQL.POST.INSERT_POST_TAGS, [tagValues]);
        }
    }

    // 3. 생성된 포스트 반환
    const [posts] = await connection.execute<RowDataPacket[]>(SQL.POST.SELECT_POST_BY_ID, [postId]);
    return {
        ...(posts[0] as PostRow),
        tags: (posts[0] as PostRow).tags?.split(',') ?? []
    }  
   })
}
