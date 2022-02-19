import { Field, ID, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose'

@ObjectType()
export class TeacherAttendanceDto {

    @Field()
    _id : string
  
    @Field(() => ID)
    teacherId: mongoose.Schema.Types.ObjectId

    @Field()
    date: Date

    @Field()
    isPresent: boolean

}