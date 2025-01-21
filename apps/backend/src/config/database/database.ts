import { createPool, Pool, PoolConnection, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { dbConfig } from "./pool";

class Database {
    // 싱글톤 인스턴스를 저장하기 위한 정적 변수
    private static instance: Database;
    // MySQL 연결 풀을 저장하는 변수
    private pool: Pool;

    // 생성자는 private으로 선언하여 외부에서 new 키워드로 인스턴스 생성을 방지
    private constructor() {
        this.pool = createPool(dbConfig);
    }

    // 싱글톤 패턴: 단일 인스턴스를 반환하는 정적 메서드
    public static getInstance(): Database {
        if (!Database.instance) {
          Database.instance = new Database();
        }
        return Database.instance;
    }

    // 데이터베이스 연결을 가져오는 메서드
    public async getConnection() : Promise<PoolConnection> {
        try{
            const connection = await this.pool.getConnection();
            return connection;
        } catch (error) {
            console.error("DB 연결 오류 :", error);
            throw error;
        }
    }

    // SELECT 쿼리 실행을 위한 메서드
    // T는 반환될 데이터의 타입을 정의 (RowDataPacket[] 확장)
    public async query<T extends RowDataPacket[]>(
        sql: string,  // SQL 쿼리문
        values?: any[] // 쿼리 파라미터 (선택적)
      ): Promise<[T, any]> {
        const connection = await this.getConnection();
        try {
          const [results, fields] = await connection.query<T>(sql, values);
          return [results, fields];
        } finally {
          connection.release(); // 연결 반환
        }
    }

    // INSERT, UPDATE, DELETE 쿼리 실행을 위한 메서드
    public async execute(
        sql: string,  // SQL 쿼리문
        values?: any[] // 쿼리 파라미터 (선택적)
      ): Promise<[ResultSetHeader, any]> {
        const connection = await this.getConnection();
        try {
          const [result, fields] = await connection.execute(sql, values);
          return [result as ResultSetHeader, fields];
        } finally {
          connection.release(); // 연결 반환
        }
    }

    // 트랜잭션 처리를 위한 메서드
    // 여러 쿼리를 하나의 트랜잭션으로 처리
    public async transaction<T>(
        callback: (connection: PoolConnection) => Promise<T>
      ): Promise<T> {
        const connection = await this.getConnection();
        try {
          await connection.beginTransaction(); // 트랜잭션 시작
          const result = await callback(connection);
          await connection.commit(); // 트랜잭션 커밋
          return result;
        } catch (error) {
          await connection.rollback(); // 에러 발생 시 롤백
          throw error;
        } finally {
          connection.release(); // 연결 반환
        }
    }
    
    // 데이터베이스 연결 풀을 종료하는 메서드
    public async close(): Promise<void> {
        await this.pool.end();
    }
}

// 데이터베이스 인스턴스를 외부에서 사용할 수 있도록 export
export const db = Database.getInstance();