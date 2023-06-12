import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'redhat',
  database: process.env.DB_NAME || 'buffer',
  entities: ['src/modules/**/entities/*.entity.{js,ts}'],
  migrations: ['src/migrations/*.ts'],
};

export = config;
