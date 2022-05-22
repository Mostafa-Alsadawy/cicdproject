import dotenv from "dotenv";

dotenv.config();
const env = process.env;

export const config = {
    env:env.NODE_ENV,
    host:env.HOST,
    db_port:parseInt(env.DB_PORT as string),
    database:env.DATABASE,
    database_test:env.DATABASE_TEST,
    user:env.DB_USER,
    password:env.PASSWORD,
    pepper:env.PEPPER,
    salt_rounds:env.SALT_ROUNDs,
    tokenseceret:env.TOKEN_SECRET,
    port:parseInt(env.PORT as string) || 8080
}

