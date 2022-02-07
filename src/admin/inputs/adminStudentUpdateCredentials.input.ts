import { Field , ID, InputType} from "@nestjs/graphql";
import * as mongoose from 'mongoose'
import { ObjectId } from "mongoose";

@InputType()
export class  adminStudentUpdateCredentialsInput{

    @Field(() => ID)
    _id : ObjectId

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

    @Field(() => ID)
    parentId: mongoose.Schema.Types.ObjectId

    @Field({nullable : true})
    isStudent: boolean

}