import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

type Jour = 'Lundi' | 'Mardi' | 'Mercredi' | 'Jeudi' | 'Vendredi' | 'Samedi' | 'Dimanche';

interface Person {
  name: string;
  email: string;
  age: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const nom: string = 'John';

    const jour: Jour = 'Lundi';

    const john: Person = {
      name: 'John',
      email: 'john@gmail.com',
      age: 30
    }

    return this.appService.getHello();
  }
}
