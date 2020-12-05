import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { Task } from 'src/tasks/task.entity';
import * as config from 'config';

const dbConfig: any = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.DB_HOST || dbConfig.host,
  port: process.env.DB_PORT || dbConfig.port,
  database: process.env.DB_NAME || dbConfig.database,
  username: process.env.DB_USER || dbConfig.username,
  password: process.env.DB_PASS || dbConfig.password,
  // entities: [__dirname + '../**/*.entity.ts'], // BUG: Wildcard import not working
  entities: [Task, User],
  synchronize: process.env.ORM_SYNC || dbConfig.synchronize,
};
