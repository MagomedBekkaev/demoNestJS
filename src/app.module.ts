import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ArticlesModule } from './articles/articles.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthorController } from './author/authors.controller';
import { AuthorModule } from './author/authors.module';

@Module({
  imports: [UsersModule, ArticlesModule, PrismaModule, AuthorModule],
  controllers: [AppController, AuthorController],
  providers: [AppService],
})
export class AppModule {}