import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class adminLoginResponseDto {

    @Field()
    code: number

    @Field()
    message: string

    @Field({nullable : true})
    token: string  

}