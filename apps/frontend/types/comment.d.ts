interface Comment {
    id: number;
    postId: number;
    author: {
        name: string;
        avatar?: string;
        githubId?: string;
    }
    content: string;
    createdAt: string;
    updatedAt: string;
    parentId?: number;
}