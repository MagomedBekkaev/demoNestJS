import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticlesService {
  private articles = [];

  getAllArticles() {
    return this.articles;
  }

  getArticle(id: number) {
    return this.articles.find((article) => article.id === id);
  }

  addArticle(article: { title: string; content: string }) {
    this.articles.push({ id: Date.now(), ...article });
    return { message: 'Article ajouté avec succès' };
  }

  // Exemple de fonction de modification
  editArticle(id: number, updatedData: { title?: string; content?: string }) {
    const articleIndex = this.articles.findIndex((a) => a.id === id);
    if (articleIndex !== -1) {
      this.articles[articleIndex] = {
        ...this.articles[articleIndex],
        ...updatedData,
      };
      return { message: 'Article modifié avec succès' };
    }
    return { message: 'Article introuvable' };
  }

  // Exemple de fonction de suppression
  deleteArticle(id: number) {
    this.articles = this.articles.filter((a) => a.id !== id);
    return { message: 'Article supprimé avec succès' };
  }
}