import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/users/entities/role.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log("Controllo RUOLO");
    
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    
    const request = context.switchToHttp().getRequest();
    console.log(request.user);
    
    const user = request.user;
    if(user){

      let uRole = await this.userRepository.findOne(user.id, {relations: ["role"]})
      const hasRole = () => roles.some((role) =>{ if(uRole && uRole.role && uRole.role.name == role) return true; else false;});   
      return hasRole();

    }else{

      return false;
    }
  }

  async checkRole(user, roles): Promise<boolean>{
    let uRole = await this.userRepository.findOne(user.id, {relations: ["role"]})
    console.log(uRole);
    console.log(roles);
    const hasRole = () => roles.some((role) =>{ if(uRole.role.name == role) return true; else false;});
    console.log(hasRole());
      
    return user && user.role && hasRole();
  }
}