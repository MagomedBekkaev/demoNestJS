import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthorsService {

    constructor(private prisma: PrismaService) {}

    async getAllAuthors() {
        return this.prisma.author.findMany();
    }

    async getAuthor(id: number) {
        return this.prisma.author.findUnique({
        where: { id },
        });
    }

    async addAuthor(author: { name: string; email: string }) {
        return this.prisma.author.create({
        data: {
            name: author.name,
            email: author.email,
        },
        });
    }

    async editAuthor(id: number, updatedData: { name?: string; email?: string }) {
        return this.prisma.author.update({
        where: { id },
        data: updatedData,
        });
    }

    async deleteAuthor(id: number) {
        return this.prisma.author.delete({
        where: { id },
        });
    }
}