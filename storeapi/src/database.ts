import { Pool } from "pg";
import {config} from "./config/config";

const client = new Pool({
    host:config.host,
    user:config.user,
    password:config.password,
    port:config.db_port,
    database:(config.env == "dev"? config.database : config.database_test)
})

export default client;

