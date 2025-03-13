import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  addArticle(@Body() article: { title: string; content: string }) {
    return this.articlesService.addArticle(article);
  }

  @Get()
  getAllArticles() {
    return this.articlesService.getAllArticles();
  }

  @Get(':id')
  getArticle(@Param('id') id: string) {
    return this.articlesService.getArticle(+id);
  }

  @Patch(':id')
  editArticle(@Param('id') id: string, @Body() updatedData: { title?: string; content?: string }) {
    return this.articlesService.editArticle(+id, updatedData);
  }

  @Delete(':id')
  deleteArticle(@Param('id') id: string) {
    return this.articlesService.deleteArticle(+id);
  }
}