import { Field, ObjectType } from "@nestjs/graphql";
import { AccoutantDto } from "../.././accountant/dto/accountant.dto";

@ObjectType()
export class AdminAccountantUpdateCredentialsResponseDto{

    @Field()
    readonly code : number;

    @Field()
    readonly message : string;

    @Field({nullable : true})
    readonly data : AccoutantDto;
    
}