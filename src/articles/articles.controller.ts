import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { ArticlesService } from './articles.service';

interface Article {
    id: number;
    title: string;
}


@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  addArticle(@Body() createarticleDto: CreateArticleDto) {
    return this.articlesService.addArticle(createarticleDto);
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
  editArticle(@Param('id') id: string, @Body() updatearticleDto: UpdateArticleDto) {
    return this.articlesService.editArticle(+id, updatearticleDto);
  }

  @Delete(':id')
  deleteArticle(@Param('id') id: string) {
    return this.articlesService.deleteArticle(+id);
  }
}

