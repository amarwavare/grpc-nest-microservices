import { registerAs } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";
import { config as dotenvConfig } from 'dotenv';
import ALL_ENTITIES from "../../schemas/sql/index";

dotenvConfig({ path: '.env' });

const config: DataSourceOptions = {
    type: 'postgres',
    port: 5432,
    // username: process.env.DATABASE_USER_NAME,
    // password: process.env.DATABASE_PASSWORD,
    // database: process.env.DATABASE_NAME,
    username: 'grpcuser',
    password: 'grpcpassword',
    database: 'grpcdatabase',
    entities: ALL_ENTITIES,
    // host:'jdbc:postgresql://localhost:5432/postgres',
    // entities: ["dist/**/*.entity{.ts,.js}"],
    migrations: ["./dist/migrations/*{.ts,.js}"],
    // autoLoadEntities: true,
    synchronize: true,
    // migrationsRun: true,
    migrationsTableName: `grpc_${Date.now()}`
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
// export default config;