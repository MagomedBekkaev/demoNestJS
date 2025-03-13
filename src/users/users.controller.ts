import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';

interface User{
    id: number,
    name: string;
}

@Controller('users')
export class UserController{

    constructor(private userService: UsersService){

    }

    @Get()
    getAllUsers(): User[]{
        return this.userService.findAll();
    }

    @Get(":id")
    getUser(@Param("id") id:number):User|undefined{
        return this.userService.findUser(id);
    }

    @Post()
    addUser(@Body() userData : User): User[]{
        const users: User[] = this.userService.saveUser(userData);
        return users;
    }

}