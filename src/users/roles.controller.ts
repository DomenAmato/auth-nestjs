import { Controller, UseGuards, Post, Get, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { ListUserDto } from './dto/list-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RolesService } from './roles.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/roles')
export class RolesController {

    constructor(private readonly rolesService: RolesService) {}

    @Post()
    create(@Body() createRoleDto: CreateRoleDto) {
        
        return this.rolesService.create(createRoleDto);
        //return 'This action adds a new user';
    }
 
    @Get()
    findAll(@Query() query: ListUserDto) {

        var roles = this.rolesService.findAll();
        return roles;
    }
  
    @Get(':id')
    @UseGuards(AuthGuard('jwt'))
    findOne(@Param('id') id: string) {
      return `This action returns a #${id} user`;
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      return `This action updates a #${id} user`;
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return `This action removes a #${id} user`;
    }
}
