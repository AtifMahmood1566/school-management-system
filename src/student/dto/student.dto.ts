import { Field , ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose'

@ObjectType()
export class ContributionDto{

    @Field()
    name: string

    @Field()
    email: string

    @Field()
    password: string

    @Field()
    gender: string

    @Field()
    religion: string

    @Field()
    joiningDate: Date

    @Field()
    dob: Date

    @Field()
    age: number

    @Field()
    address: string

    @Field()
    rollNumber: number

    @Field()
    class: number

    @Field()
    section: string

    @Field()
    parrentId: mongoose.Schema.Types.ObjectId

    @Field()
    isStudent: boolean

}