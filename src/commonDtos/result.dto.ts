import { Field, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose'

@ObjectType()
export class ResultDto {

    @Field()
    studentId: mongoose.Schema.Types.ObjectId

    @Field()
    subject: mongoose.Schema.Types.ObjectId

    @Field()
    class: number

    @Field()
    totalMarks: number

    @Field()
    obtainedMarks: number

    @Field()
    percentage: number

}