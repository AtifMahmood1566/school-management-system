import { Field, InputType} from "@nestjs/graphql";

@InputType()
export class adminTeacherSignupInput {

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