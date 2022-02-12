import { Field, ID, InputType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@InputType()
export class adminRolesUpdateCredentialsInput {

    @Field(() => ID)
    _id : ObjectId

    @Field()
    name: string

}