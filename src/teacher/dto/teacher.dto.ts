import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class TeacherDto {

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
    salary: number

    @Field()
    employeeId: string;

    @Field()
    contactNo: number

    @Field()
    isTeacher: boolean

}