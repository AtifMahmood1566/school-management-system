import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from '.././entities/student.entity';
import { StudentDto } from './dto/student.dto';
// import { CreateStudentInput } from './dto/create-student.input';
// import { UpdateStudentInput } from './dto/update-student.input';

@Resolver()
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  // @Mutation(() => Student)
  // createStudent(@Args('createStudentInput') createStudentInput: CreateStudentInput) {
  //   return this.studentService.create(createStudentInput);
  // }

  @Query(() => [StudentDto], { name: 'student' })
  findAll() {
    return this.studentService.findAll();
  }

  @Query(() => StudentDto, { name: 'student' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.studentService.findOne(id);
  }

  // @Mutation(() => StudentDto)
  // updateStudent(@Args('updateStudentInput') updateStudentInput: UpdateStudentInput) {
  //   return this.studentService.update(updateStudentInput.id, updateStudentInput);
  // }

  @Mutation(() => StudentDto)
  removeStudent(@Args('id', { type: () => Int }) id: number) {
    return this.studentService.remove(id);
  }
}
