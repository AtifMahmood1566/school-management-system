import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherResolver } from './teacher.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Teacher, TeacherSchema } from '.././entities/teacher.entity';
import { Roles, RolesSchema } from '.././entities/roles.entity';
import { RoleMapping, RoleMappingSchema } from '.././entities/rolesMappin.entity';

@Module({
  imports : [MongooseModule.forFeature([
    {
      name : Teacher.name , schema : TeacherSchema
    },
    {
      name : Roles.name , schema : RolesSchema
    },
    {
      name : RoleMapping.name , schema : RoleMappingSchema
    }
  ])],
  providers: [TeacherResolver, TeacherService]
})
export class TeacherModule {}
