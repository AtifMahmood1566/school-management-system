import { Field, ID, InputType } from "@nestjs/graphql";
import * as mongoose from 'mongoose'

@InputType()
export class adminRolesMappingUpdateCredentialsInput {

    @Field(() => ID)
    _id : mongoose.Schema.Types.ObjectId

    @Field(() => ID)
    userId: mongoose.Schema.Types.ObjectId

    @Field(() => ID)
    roleId : mongoose.Schema.Types.ObjectId

}