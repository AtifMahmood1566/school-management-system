import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class adminEnterSubjectInput {

    @Field()
    name: string

    @Field()
    subjectCode : string

}