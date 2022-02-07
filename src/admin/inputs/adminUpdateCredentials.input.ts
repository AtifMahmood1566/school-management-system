import { Field , ID, InputType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@InputType()
export class AdminUpdateCredentialsInput{

    @Field(() => ID)
    _id : ObjectId

    @Field()
    name: string

    @Field()
    email: string
    
    @Field()
    password: string

}