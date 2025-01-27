// API 인스턴스 설정
export const API = {
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
    headers: {
        "Content-Type": "application/json",
    }
}

// API 응답 에러 처리
export class APIError extends Error {
    constructor(public status: number, message: string) {
        super(message);
    }
}