import { Field , InputType } from "@nestjs/graphql";

@InputType()
export class adminParentSignupInput{

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