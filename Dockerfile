FROM node:18-alpine

WORKDIR /app

# 전체 workspace 복사
COPY . .

# pnpm 설치
RUN npm install -g pnpm

# 의존성 설치
RUN pnpm install

# backend 빌드
WORKDIR /app/apps/backend
RUN pnpm run build

# uploads 디렉토리 생성
RUN mkdir -p uploads/posts

EXPOSE 4000

CMD ["pnpm", "start"]