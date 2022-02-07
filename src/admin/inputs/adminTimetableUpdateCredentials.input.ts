import { Field, ID, InputType } from "@nestjs/graphql";
import * as mongoose from 'mongoose'
import { ObjectId } from "mongoose";

@InputType()
export class adminTimetableUpdateCredentialsInput {

    @Field(() => ID)
    _id : ObjectId 

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