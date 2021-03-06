import { Field, ObjectType } from "@nestjs/graphql";
import { AdminDto } from "../dto/admin.dto";

@ObjectType()
export class AdminUpdateCredentialsResponseDto{

    @Field()
    readonly code : number;

    @Field()
    readonly message : string;

    @Field({nullable : true})
    readonly data : AdminDto;
    
}