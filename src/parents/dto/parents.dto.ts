import { Field , ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ParentDto{

    @Field()
    _id : string

    @Field()
    name: string

    @Field()
    email: string
    
    @Field()
    password: string

    @Field()
    gender : string

    @Field()
    contactNo : number

}