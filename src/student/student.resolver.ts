import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from '.././entities/student.entity';
import { StudentDto } from './dto/student.dto';
import { studentsLoginResponseDto } from './studentsApisResponsesDtos/studentsLoginResponse.dto,';
import { studentsLoginInput } from './inputs/studentsLogin.input';
// import { CreateStudentInput } from './dto/create-student.input';
// import { UpdateStudentInput } from './dto/update-student.input';

@Resolver()
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Mutation(() => studentsLoginResponseDto)
  async studentsLogin(@Args('input') studentsLoginCredentials : studentsLoginInput) 
  {
    return await this.studentService.loginStudent(studentsLoginCredentials);
  }
}
