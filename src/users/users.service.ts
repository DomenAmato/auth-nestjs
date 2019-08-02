import { Injectable, UnauthorizedException } from '@nestjs/common';
//import { User } from './interface/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import {IUser} from './interfaces/user.interface'
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

    //private readonly users: User[] = [];
    
  create(user: IUser) {
    //this.users.push(user);
    this.userRepository.create(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
    //return this.users;
  }

  async findSigned(email:string | undefined, username: string | undefined, pass:string): Promise<User>{

    let user;
    if(email){
      user = await this.userRepository.findOne({ where: { email: email}});
    }else if(username){
      user = await this.userRepository.findOne({ where: { username: username}});
    }else{
      user = undefined;
    }
    return user;
  }

    
/*
  findOne(id:number): User {
    //return this.users[id];
  }
*/
}
