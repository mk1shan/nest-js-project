import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user-entity'; // Ensure this path is correct
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Register User entity here
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // Export UsersService if needed elsewhere
})
export class UsersModule {}
