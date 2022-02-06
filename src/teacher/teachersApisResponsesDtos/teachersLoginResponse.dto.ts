import { Field , ObjectType } from "@nestjs/graphql";

@ObjectType()
export class teachersLoginResponseDto {

    @Field()
    code: number

    @Field()
    message : string

}