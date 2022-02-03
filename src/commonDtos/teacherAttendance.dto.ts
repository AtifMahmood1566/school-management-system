import { Field, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose'

@ObjectType()
export class TeacherAttendanceDto {

  
    @Field()
    teacherId: mongoose.Schema.Types.ObjectId

    @Field()
    date: Date

    @Field()
    isPresent: boolean

}