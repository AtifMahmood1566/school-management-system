import { Field, ID, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose'

@ObjectType()
export class RolesMappingDto {

    @Field()
    _id : string

    @Field(() => ID)
    userId: mongoose.Schema.Types.ObjectId

    @Field(() => ID)
    roleId : mongoose.Schema.Types.ObjectId

}