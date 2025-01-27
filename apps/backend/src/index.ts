import express from "express";
import { db } from "./config/database/database";
import dotenv from "dotenv";
import cors from "cors";
import router from "./router/route";
import { WHITE_LIST } from "./config/constants";

dotenv.config({path: '.env.local'});

const app = express();


// 미들웨어 추가
app.use(express.json());
app.use(cors({
    origin: WHITE_LIST,
    credentials: true
}));
const port = process.env.PORT || 4000;

app.use("/api", router);

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// db 연결 상태 체크
async function checkDbConnection() {
   try {
    const connection = await db.getConnection();
    console.log("DB 연결 상태 체크 완료");
    connection.release();
   } catch (error) {
    console.error("DB 연결 상태 체크 실패", error);
    process.exit(1); // db 연결 실패 시 서버 종료
   }
}


async function startServer() {
    await checkDbConnection();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

startServer();


