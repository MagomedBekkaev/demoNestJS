import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { AuthorsService } from './authors.service';

@Controller('author')
export class AuthorsController {
      constructor(private readonly authorsService: AuthorsService) {}
    
      @Post()
      addAuthor(@Body() author: { title: string; content: string }) {
        return this.authorsService.addAuthor(author);
      }
    
      @Get()
      getAllAuthors() {
        return this.authorsService.getAllAuthors();
      }
    
      @Get(':id')
      getAuthor(@Param('id') id: string) {
        return this.authorsService.getAuthor(+id);
      }
    
      @Patch(':id')
      editAuthor(@Param('id') id: string, @Body() updatedData: { title?: string; content?: string }) {
        return this.authorsService.editAuthor(+id, updatedData);
      }
    
      @Delete(':id')
      deleteAuthor(@Param('id') id: string) {
        return this.authorsService.deleteAuthor(+id);
      }

}
