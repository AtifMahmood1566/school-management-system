import { Field, ID, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose'

@ObjectType()
export class FeesDto{
    
    @Field()
    _id : string

    @Field(() => ID)
    studentId : mongoose.Schema.Types.ObjectId

    @Field()
    monthlyFees : number
    
    @Field()
    concession : number

    @Field()
    amountPaid : number

    @Field()
    date : Date

    @Field()
    isPaid : boolean
    
}