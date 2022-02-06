import { Field , ObjectType } from "@nestjs/graphql";

@ObjectType()
export class accountantLoginResponseDto {

    @Field()
    code: number

    @Field()
    message : string

}