import { Module } from '@nestjs/common';
import { ParentsService } from './parents.service';
import { ParentsResolver } from './parents.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Parent, ParentSchema } from '.././entities/parent.entity';
import { Roles, RolesSchema } from '.././entities/roles.entity';
import { RoleMapping, RoleMappingSchema } from '.././entities/rolesMappin.entity';

@Module({
  imports : [MongooseModule.forFeature([
    {
      name : Parent.name , schema : ParentSchema
    },
    {
      name : Roles.name , schema : RolesSchema
    },
    {
      name : RoleMapping.name , schema : RoleMappingSchema
    }
  ])],
  providers: [ParentsResolver, ParentsService]
})
export class ParentsModule {}
