import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {User} from './entities/user.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Role } from './entities/role.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role]), PassportModule.register({property: 'user'})],
  controllers: [UsersController, RolesController],
  providers: [UsersService, RolesService],
  exports: [UsersModule, UsersService]
})
export class UsersModule {}
