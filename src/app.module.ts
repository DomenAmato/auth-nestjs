import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {User} from './users/entities/user.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { RolesController } from './users/roles.controller';
import { RolesService } from './users/roles.service';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(),
    AuthModule
  ],
  controllers: [AppController, RolesController],
  providers: [AppService, RolesService],
})
export class AppModule {

  constructor(private readonly connection: Connection) {

  }
}


