import { Field , ID, InputType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@InputType()
export class adminAccoutantUpdateCredentialsInput{

    @Field(() => ID)
    _id : ObjectId

    @Field()
    readonly name: string

    @Field()
    readonly email: string
    
    @Field()
    readonly password: string

    @Field()
    readonly gender : string

    @Field()
    readonly religion : string

    @Field({nullable : true})
    readonly joiningDate : Date

    @Field()
    readonly dob: Date

    @Field()
    readonly age : number

    @Field()
    readonly address: string

    @Field()
    readonly salary : number

    @Field()
    readonly employeeId : string

    @Field()
    readonly contactNo : number 

    @Field({nullable : true})
    readonly isAccountant : boolean

}