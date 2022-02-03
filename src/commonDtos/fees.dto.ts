import { Field, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose'

@ObjectType()
export class FeesDto{
    
    @Field()
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