export interface PostInitial {
  title: string;
  description?: string;
  content: string;
  thumbnail?: string;
  tags: string[];
  slug: string;
}
export interface Post extends PostInitial {
  id: number;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  viewCount: number;
}

// 게시글 생성 시 사용할 DTO
export interface CreatePostDTO extends PostInitial {}

// 게시글 업데이트 시 사용할 DTO
export interface UpdatePostDTO extends Partial<PostInitial> {}

// 게시글 조회 시 사용할 DTO
export interface PostListDTO {
  id: number;
  title: string;
  description?: string;
  slug: string;
  thumbnail?: string;
  tags: string[];
  publishedAt: Date;
  viewCount: number;
  content: string;
}

export interface ResponseProps<T> {
  page: number;
  hasNextPage: boolean;
  content: T[];
  totalCount: number;
  hasPrevPage: boolean;
}

export interface Tag {
  id: number;
  name: string;
}
