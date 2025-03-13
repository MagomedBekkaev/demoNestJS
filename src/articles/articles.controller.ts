import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { ArticlesService } from './articles.service';

interface Article {
    id: number;
    title: string;
}

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  getAllArticles() {
    return this.articlesService.getAllArticles();
  }

  @Get(':id')
  getArticle(@Param('id') id: number) {
    return this.articlesService.getArticle(id);
  }

  @Post()
  addArticle(@Body() article: { title: string; content: string }) {
    return this.articlesService.addArticle(article);
  }

  @Patch(':id')
  editArticle(
    @Param('id') id: number,
    @Body() updatedData: { title?: string; content?: string },
  ) {
    return this.articlesService.editArticle(id, updatedData);
  }

  @Delete(':id')
  deleteArticle(@Param('id') id: number) {
    return this.articlesService.deleteArticle(id);
  }
}
