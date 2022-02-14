import { Field , ID, InputType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@InputType()
export class adminAccoutantUpdateCredentialsInput{

    @Field(() => ID)
    _id : ObjectId

    @Field({nullable : true})
    readonly name: string

    @Field({nullable : true})
    readonly email: string
    
    @Field({nullable : true})
    readonly password: string

    @Field({nullable : true})
    readonly gender : string

    @Field({nullable : true})
    readonly religion : string

    @Field({nullable : true})
    readonly joiningDate : Date

    @Field({nullable : true})
    readonly dob: Date

    @Field({nullable : true})
    readonly address: string

    @Field({nullable : true})
    readonly salary : number

    @Field({nullable : true})
    readonly employeeId : string

    @Field({nullable : true})
    readonly contactNo : number 

    @Field({nullable : true})
    readonly isAccountant : boolean

}