import { Field, ObjectType } from "@nestjs/graphql";
import { StudentDto } from "../../student/dto/student.dto";

@ObjectType()
export class AdminStudentSignupResponseDto{

    @Field()
    readonly code : number;

    @Field()
    readonly message : string;

    @Field({nullable : true})
    readonly data : StudentDto;
    
}