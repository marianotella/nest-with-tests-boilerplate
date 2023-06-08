import { ConfigurationInterface } from '../utils/interfaces';

export const configuration = (): ConfigurationInterface => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  env: process.env.ENVIRONMENT,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    type: process.env.DATABASE_TYPE,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
});
