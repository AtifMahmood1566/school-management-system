import { Field, ID, InputType } from "@nestjs/graphql";
import * as mongoose from 'mongoose'

@InputType()
export class adminCreateRolesMappingInput {

    @Field(() => ID)
    userId: mongoose.Schema.Types.ObjectId

    @Field(() => ID)
    roleId : mongoose.Schema.Types.ObjectId

}