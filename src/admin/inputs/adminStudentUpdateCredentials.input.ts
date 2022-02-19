import { Field , ID, InputType} from "@nestjs/graphql";
import * as mongoose from 'mongoose'
import { ObjectId } from "mongoose";

@InputType()
export class  adminStudentUpdateCredentialsInput{

    @Field(() => ID)
    _id : ObjectId

    @Field({nullable : true})
    name: string

    @Field({nullable : true})
    email: string

    @Field({nullable : true})
    password: string

    @Field({nullable : true})
    gender: string

    @Field({nullable : true})
    religion: string

    @Field({nullable : true})
    dob: Date

    @Field({nullable : true})
    address: string

    @Field({nullable : true})
    rollNumber: number

    @Field({nullable : true})
    class: number

    @Field({nullable : true})
    section: string

    @Field(() => ID , {nullable : true})
    parentId: mongoose.Schema.Types.ObjectId

    @Field({nullable : true})
    isStudent: boolean

}