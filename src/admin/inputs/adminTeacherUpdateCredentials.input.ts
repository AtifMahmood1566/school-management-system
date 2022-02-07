import { Field, ID, InputType} from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@InputType()
export class adminTeacherUpdateCredentialsInput {

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
    address: string

    @Field()
    salary: number

    @Field()
    employeeId: string;

    @Field()
    contactNo: number

    @Field({nullable : true})
    isTeacher: boolean

}