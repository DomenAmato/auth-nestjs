import { Controller, UseGuards, Post, Get, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ListUserDto } from './dto/list-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/roles.decorator';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthService } from '../auth/auth.service';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('api/users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Post()
    @Roles('ADMIN')
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    create(@Body() createUserDto: CreateUserDto) {
        var user = {
            email: createUserDto.email,
            username: createUserDto.username,
            password: createUserDto.password,
            create_at: new Date(),
            update_at: new Date()
        }
        
        this.usersService.create(user);
        return user;
    }
 
    @Get()
    @Roles('ADMIN')
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    findAll(@Query() query: ListUserDto) {
        /**
         * IMPLEMENTARE LE WHERE NELLA FIND
         */
        var users = this.usersService.findAll();
        return users;
    }
  
    @Get(':id')
    @Roles('ADMIN')
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    findOne(@Param('id') id: string) {

      /**
       * IMPLEMENTARE FIND
       */
      return `This action returns a #${id} user`;
    }
  
    @Put(':id')
    @Roles('ADMIN')
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {

      /**
       * IMPLEMENTARE UPDATE
       */
      return `This action updates a #${id} user`;
    }
  
    @Delete(':id')
    @Roles('ADMIN')
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    remove(@Param('id') id: string) {

      /**
       * IMPLEMENTARE DELETE
       */
      return `This action removes a #${id} user`;
    }

}
