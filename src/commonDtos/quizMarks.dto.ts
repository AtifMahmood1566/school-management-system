import { Field, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose'

@ObjectType()
export class QuizzMarksDto {

    @Field()
    studentId: mongoose.Schema.Types.ObjectId

    @Field()
    quizNo: number

    @Field()
    subject: mongoose.Schema.Types.ObjectId

    @Field()
    class: number

    @Field()
    totalMarks: number

    @Field()
    obtainedMarks: number

    @Field()
    isSubmitted: boolean


}