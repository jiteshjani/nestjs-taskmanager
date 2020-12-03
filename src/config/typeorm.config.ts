import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Task } from 'src/tasks/task.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'nesttaskmanager',
  // entities: [__dirname + '../**/*.entity.ts'], // TODO: Bug wildcard import not working
  entities: [Task],
  synchronize: true,
};
