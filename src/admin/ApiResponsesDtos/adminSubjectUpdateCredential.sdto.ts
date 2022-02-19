import { Field, ObjectType } from "@nestjs/graphql";
import { SubjectDto } from "../.././commonDto/subject.dto";

@ObjectType()
export class AdminSubjectUpdateCredentialsResponseDto{

    @Field()
    readonly code : number;

    @Field()
    readonly message : string;

    @Field({nullable : true})
    readonly data : SubjectDto;
    
}