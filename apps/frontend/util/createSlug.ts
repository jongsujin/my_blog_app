export const createSlug = (title: string): string => {
    return title
        .toLowerCase()                  // 소문자로 변환
        .replace(/[^a-z0-9가-힣]/g, '-')  // 특수문자를 하이픈으로 변환
        .replace(/--+/g, '-')          // 여러 하이픈을 하나로
        .replace(/^-|-$/g, '')         // 시작과 끝의 하이픈 제거
}