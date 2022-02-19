import { Field, ID, InputType} from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@InputType()
export class adminTeacherUpdateCredentialsInput {

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
    salary: number

    @Field({nullable : true})
    employeeId: string;

    @Field({nullable : true})
    contactNo: number

    @Field({nullable : true})
    isTeacher: boolean

}