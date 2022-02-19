import { Field, ID, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose'

@ObjectType()
export class PaperMarksDto {

    @Field()
    _id : string

    @Field(() => ID)
    studentId: mongoose.Schema.Types.ObjectId

    @Field(() => ID)
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