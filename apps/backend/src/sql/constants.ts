import { readFileSync } from "fs";
import path from "path";

// SQL 쿼리 파일 경로
const SQL_PATH = {
    POST: {
        SELECT_POSTS: path.join(__dirname, './post/select_post_my_blog.sql'),
        COUNT_POSTS: path.join(__dirname, './post/select_post_my_blog_count.sql'),
    }
};

// SQL 쿼리 상수
export const SQL = {
    POST : {
        SELECT_POSTS: readFileSync(SQL_PATH.POST.SELECT_POSTS, 'utf-8'),
        COUNT_POSTS: readFileSync(SQL_PATH.POST.COUNT_POSTS, 'utf-8'),
    }
}