import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SubjectDto {

    @Field()
    _id : string

    @Field()
    name: string

    @Field()
    subjectCode : string

}