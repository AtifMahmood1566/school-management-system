import { Field , ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AdminDto{

    @Field()
    _id : string

    @Field()
    name: string

    @Field()
    email: string
    
    @Field()
    password: string

}