import { Injectable } from "@nestjs/common";

interface User {
    id: number;
    name: string;
}

@Injectable()
export class UsersService {
    
    private users: User[] = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Doe'}
    ];

    findAll(): User[]{
        return this.users;
    }

    findUser(id: number): User | undefined{
        return this.users.find(user => user.id === id);
    }

    saveUser(userData: User): User[]{
        this.users.push(userData);
        return this.users;
    }
}