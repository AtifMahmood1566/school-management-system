import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TeacherService } from './teacher.service';
import { teachersLoginResponseDto } from './teachersApisResponsesDtos/teachersLoginResponse.dto';
import { teachersLoginInput } from './inputs/teachersLogin.input';
import { TeacherDto } from './dto/teacher.dto';
import { UseGuards } from '@nestjs/common';
import { AuthenticationGuard } from '.././authentication/authentication.guard';

@Resolver()
export class TeacherResolver {
  constructor(private readonly teacherService: TeacherService) {}

  @Mutation(() => teachersLoginResponseDto)
  async teachersLogin(@Args('input') teachersLoginCredentials : teachersLoginInput) 
  {
    return await this.teacherService.loginTeacher(teachersLoginCredentials);
  }

  @Query(() => [TeacherDto])
  @UseGuards(AuthenticationGuard)
  findAll() {
    return this.teacherService.findAll();
  }
}
