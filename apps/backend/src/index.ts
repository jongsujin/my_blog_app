import express from "express";
import { db } from "./config/database/database";
import dotenv from "dotenv";

dotenv.config({path: '.env.local'});

const app = express();

const port = process.env.PORT || 4000;

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



app.get("/", (req, res) => {
    res.json({ message: "Hello from backend!" });
});

async function startServer() {
    await checkDbConnection();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

startServer();


