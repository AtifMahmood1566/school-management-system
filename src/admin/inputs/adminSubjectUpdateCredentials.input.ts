import { Field, ID, InputType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@InputType()
export class adminSubjectUpdateCredentialsInput {

    @Field(() => ID)
    _id : ObjectId

    @Field()
    name: string

    @Field()
    subjectCode : string

}