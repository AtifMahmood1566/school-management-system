import { Field , ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AccoutantDto{

    @Field()
    readonly name: string

    @Field()
    readonly email: string
    
    @Field()
    readonly password: string

    @Field()
    readonly gender : string

    @Field()
    readonly religion : string

    @Field()
    readonly joiningDate : Date

    @Field()
    readonly dob: Date

    @Field()
    readonly age : number

    @Field()
    readonly address: string

    @Field()
    readonly salary : number

    @Field()
    readonly employeeId : string

    @Field()
    readonly contactNo : number

    @Field()
    readonly isAccountant : boolean

}