import { Field, ID, InputType } from "@nestjs/graphql";
import * as mongoose from 'mongoose'

@InputType()
export class adminCreateTimetableInput {

    @Field(() => ID)
    teacherId: mongoose.Schema.Types.ObjectId

    @Field()
    day : string
    
    @Field()
    slot : string

    @Field(() => ID)
    subject : mongoose.Schema.Types.ObjectId

    @Field()
    roomNo : number

}