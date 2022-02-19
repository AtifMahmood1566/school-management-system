import { Field, ID, InputType } from "@nestjs/graphql";
import * as mongoose from 'mongoose'
import { ObjectId } from "mongoose";

@InputType()
export class adminTimetableUpdateCredentialsInput {

    @Field(() => ID)
    _id : ObjectId 

    @Field(() => ID , {nullable : true})
    teacherId: mongoose.Schema.Types.ObjectId

    @Field({nullable : true})
    day : string
    
    @Field({nullable : true})
    slot : string

    @Field(() => ID , {nullable : true})
    subject : mongoose.Schema.Types.ObjectId

    @Field({nullable : true})
    roomNo : number

}