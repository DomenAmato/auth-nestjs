import { Injectable } from '@nestjs/common';
//import { User } from './interface/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
import { IRole } from './interfaces/role.interface'

@Injectable()
export class RolesService {

  constructor(
    @InjectRepository(Role)
    private readonly rolesRepository: Repository<Role>,
  ) {}

    //private readonly users: User[] = [];

  create(role: IRole) {
    //this.users.push(user);
    this.rolesRepository.save(role);
  }

  findAll(): Promise<Role[]> {
    return this.rolesRepository.find();
    //return this.users;
  }
/*
  findOne(id:number): User {
    //return this.users[id];
  }
*/
}
