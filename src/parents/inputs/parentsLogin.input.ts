import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class parentsLoginInput {

    @Field()
    email: string

    @Field()
    password : string

}