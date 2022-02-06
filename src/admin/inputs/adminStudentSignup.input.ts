import { Field , ID, InputType} from "@nestjs/graphql";
import * as mongoose from 'mongoose'

@InputType()
export class  adminStudentSignupInput{

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

    @Field({nullable : true})
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

    @Field(() => ID)
    parentId: mongoose.Schema.Types.ObjectId

    @Field({nullable : true})
    isStudent: boolean

}