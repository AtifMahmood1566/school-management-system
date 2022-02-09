import { Field , ObjectType } from "@nestjs/graphql";

@ObjectType()
export class parentsLoginResponseDto {

    @Field()
    code: number

    @Field()
    message : string

    @Field({nullable : true})
    token : string

}