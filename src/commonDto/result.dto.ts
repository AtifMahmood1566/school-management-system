import { Field, ID, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose'

@ObjectType()
export class ResultDto {

    @Field()
    _id : string

    @Field(() => ID)
    studentId: mongoose.Schema.Types.ObjectId

    @Field(() => ID)
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