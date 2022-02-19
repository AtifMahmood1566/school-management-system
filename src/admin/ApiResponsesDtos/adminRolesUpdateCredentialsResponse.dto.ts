import { Field, ObjectType } from "@nestjs/graphql";
import { RolesDto } from "../.././commonDto/roles.dto";

@ObjectType()
export class adminRolesUpdateCredentialsResponseDto{

    @Field()
    readonly code : number;

    @Field()
    readonly message : string;

    @Field({nullable : true})
    readonly data : RolesDto;
    
}