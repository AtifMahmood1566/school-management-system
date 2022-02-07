import { Field , ID, InputType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@InputType()
export class adminParentUpdateCredentialsInput{

    @Field(() => ID)
    _id : ObjectId

    @Field()
    name: string

    @Field()
    email: string
    
    @Field()
    password: string

    @Field()
    gender : string

    @Field()
    contactNo : number

}