import { Field, ID, InputType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@InputType()
export class adminSubjectUpdateCredentialsInput {

    @Field(() => ID)
    _id : ObjectId

    @Field({nullable : true})
    name: string

    @Field({nullable : true})
    subjectCode : string

}