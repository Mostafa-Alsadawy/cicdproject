import dotenv from "dotenv";
import path from "path";

dotenv.config({path:path.join(__dirname,"../../",".env")});
const env = process.env;

export const config = {
    env:env.NODE_ENV,
    host:env.HOST,
    database:env.DATABASE,
    database_test:env.DATABASE_TEST,
    user:env.DB_USER,
    password:env.PASSWORD,
    pepper:env.PEPPER,
    salt_rounds:env.SALT_ROUNDs,
    tokenseceret:env.TOKEN_SECRET
}

