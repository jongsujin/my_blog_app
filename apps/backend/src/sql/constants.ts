import { readFileSync } from "fs";
import path from "path";

// SQL 쿼리 파일 경로
const SQL_PATH = {
    POST: {
        SELECT_POSTS: path.join(__dirname, './post/select_post_my_blog.sql'),
        COUNT_POSTS: path.join(__dirname, './post/select_post_my_blog_count.sql'),
        SELECT_POST_BY_ID: path.join(__dirname, './post/select_post_my_blog_db_by_id.sql'),
        INSERT_POST: path.join(__dirname, './post/insert_post_my_blog_db.sql'),
        INSERT_POST_TAGS: path.join(__dirname, './post/insert_post_tags.sql'),
    },
    TAGS: {
        INSERT_TAGS: path.join(__dirname, './tags/insert_tags.sql'),
    }
};

// SQL 쿼리 상수
export const SQL = {
    POST : {
        SELECT_POSTS: readFileSync(SQL_PATH.POST.SELECT_POSTS, 'utf-8'),
        COUNT_POSTS: readFileSync(SQL_PATH.POST.COUNT_POSTS, 'utf-8'),
        SELECT_POST_BY_ID: readFileSync(SQL_PATH.POST.SELECT_POST_BY_ID, 'utf-8'),
        INSERT_POST: readFileSync(SQL_PATH.POST.INSERT_POST, 'utf-8'),
        INSERT_POST_TAGS: readFileSync(SQL_PATH.POST.INSERT_POST_TAGS, 'utf-8'),
    },
    TAGS: {
        INSERT_TAGS: readFileSync(SQL_PATH.TAGS.INSERT_TAGS, 'utf-8'),
    }
}