import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SubjectDto {

    @Field()
    name: string

    @Field()
    subjectCode : string

}