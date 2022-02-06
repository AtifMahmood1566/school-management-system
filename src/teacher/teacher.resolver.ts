import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TeacherService } from './teacher.service';
import { teachersLoginResponseDto } from './teachersApisResponsesDtos/teachersLoginResponse.dto';
import { teachersLoginInput } from './inputs/teachersLogin.input';
import { TeacherDto } from './dto/teacher.dto';

@Resolver()
export class TeacherResolver {
  constructor(private readonly teacherService: TeacherService) {}

  @Mutation(() => teachersLoginResponseDto)
  async teachersLogin(@Args('input') teachersLoginCredentials : teachersLoginInput) 
  {
    return await this.teacherService.loginTeacher(teachersLoginCredentials);
  }

  @Query(() => [TeacherDto])
  findAll() {
    return this.teacherService.findAll();
  }
}
