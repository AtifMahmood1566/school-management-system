import { Field, ID, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose'

@ObjectType()
export class StudentAttendanceDto {

    @Field()
    _id : string

    @Field(() => ID)
    studentId: mongoose.Schema.Types.ObjectId

    @Field()
    date: Date

    @Field()
    isPresent: boolean

}