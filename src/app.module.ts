import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';

const rootPath = join(__dirname, '..', 'client');
console.log(rootPath);

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath,
      exclude: ['/api*'],
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    TasksModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
