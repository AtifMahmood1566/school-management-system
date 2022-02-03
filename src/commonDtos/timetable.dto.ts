import { Field, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose'

@ObjectType()
export class TimetableDto {

    @Field()
    teacherId: mongoose.Schema.Types.ObjectId

    @Field()
    day : string
    
    @Field()
    slot : string

    @Field()
    subject : mongoose.Schema.Types.ObjectId

    @Field()
    roomNo : number

}