export const config = () => ({
  NODE_ENV: process.env.NODE_ENV,
  port: Number(process.env.PORT),
  cors: process.env.CORS === 'true',
  logger: process.env.LOGGER === 'true',
  loggerLevels: [],
  database: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});
