import { Field, ObjectType } from "@nestjs/graphql";
import { ParentDto } from "../.././parents/dto/parents.dto";

@ObjectType()
export class AdminParentSignupResponseDto{

    @Field()
    readonly code : number;

    @Field()
    readonly message : string;

    @Field({nullable : true})
    readonly data : ParentDto;
    
}