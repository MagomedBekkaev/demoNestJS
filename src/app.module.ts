import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ArticlesController } from './articles/articles.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, ArticlesController],
  providers: [AppService],
})
export class AppModule {}
