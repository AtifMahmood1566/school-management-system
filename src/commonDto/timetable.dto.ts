import { Field, ID, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose'

@ObjectType()
export class TimetableDto {

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