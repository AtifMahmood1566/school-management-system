import { Field, ObjectType } from "@nestjs/graphql";
import { RolesMappingDto } from "../.././commonDto/rolesMapping.dto";

@ObjectType()
export class AdminCreateRolesMappingResponseDto{

    @Field()
    readonly code : number;

    @Field()
    readonly message : string;

    @Field({nullable : true})
    readonly data : RolesMappingDto;
    
}