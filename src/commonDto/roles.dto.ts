import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class RolesDto {

    @Field()
    _id : string

    @Field()
    name: string

}