import { Module } from '@nestjs/common';
import { ParentsService } from './parents.service';
import { ParentsResolver } from './parents.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Parent, ParentSchema } from '.././entities/parent.entity';

@Module({
  imports : [MongooseModule.forFeature([
    {
      name : Parent.name , schema : ParentSchema
    }
  ])],
  providers: [ParentsResolver, ParentsService]
})
export class ParentsModule {}
