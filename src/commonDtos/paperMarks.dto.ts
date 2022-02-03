import { Field, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose'

@ObjectType()
export class PaperMarksDto {

    @Field()
    studentId: mongoose.Schema.Types.ObjectId

    @Field()
    subject: mongoose.Schema.Types.ObjectId

    @Field()
    totalMarks: number

    @Field()
    class: number

    @Field()
    obtainedMarks: number

    @Field()
    paperType: string

    @Field()
    isSubmitted: boolean

}