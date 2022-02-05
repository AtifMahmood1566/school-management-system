import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin, AdminSchema } from '.././entities/admin.entity';

@Module({
  imports : [MongooseModule.forFeature([
    {
      name : Admin.name , schema : AdminSchema
    }
  ])],
  providers: [AdminResolver, AdminService]
})
export class AdminModule {}
