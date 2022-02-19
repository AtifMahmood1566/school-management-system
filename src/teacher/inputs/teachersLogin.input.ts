import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class teachersLoginInput {

    @Field()
    email: string

    @Field()
    password : string

}