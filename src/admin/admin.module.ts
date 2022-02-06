import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin, AdminSchema } from '.././entities/admin.entity';
import { Teacher, TeacherSchema } from '.././entities/teacher.entity';
import { Student, StudentSchema } from '.././entities/student.entity';
import { Accountant, AccountantSchema } from '.././entities/accountant.entity';
import { Subject, SubjectSchema } from '.././entities/subject.entity';
import { Parent, ParentSchema } from '.././entities/parent.entity';

@Module({
  imports : [MongooseModule.forFeature([
    {
      name : Admin.name , schema : AdminSchema
    },
    {
      name : Teacher.name , schema : TeacherSchema
    },
    {
      name : Student.name , schema : StudentSchema
    },
    {
      name : Accountant.name , schema : AccountantSchema
    },
    {
      name : Subject.name , schema : SubjectSchema
    },
    {
      name : Parent.name , schema : ParentSchema
    }
  ])],
  providers: [AdminResolver, AdminService]
})
export class AdminModule {}
