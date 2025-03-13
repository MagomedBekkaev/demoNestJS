import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ArticlesService {

    constructor(private prisma: PrismaService) {}

    async getAllArticles() {
        return this.prisma.article.findMany();
    }

    async getArticle(id: number) {
        return this.prisma.article.findUnique({
        where: { id },
        });
    }

    async addArticle(article: { title: string; content: string; authorId: number }) {
        return this.prisma.article.create({
        data: {
            title: article.title,
            content: article.content,
            author: {
                connect: { id: article.authorId }
            }
        },
        });
    }

    async editArticle(id: number, updatedData: { title?: string; content?: string }) {
        return this.prisma.article.update({
        where: { id },
        data: updatedData,
        });
    }

    async deleteArticle(id: number) {
        return this.prisma.article.delete({
        where: { id },
        });
    }
}