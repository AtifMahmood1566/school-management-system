import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class adminCreateRoleInput {

    @Field()
    name: string

}