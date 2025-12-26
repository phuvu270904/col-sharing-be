import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'sharing',
  database: 'sharing',
  entities: [__dirname + '/**/*.entity.{ts,js}'],
  migrations: [__dirname + '/migrations/**/*.{ts,js}'],
  logging: true,
  synchronize: false,
});
