import { Field, ObjectType } from "@nestjs/graphql";
import { TimetableDto } from "../.././commonDto/timetable.dto";

@ObjectType()
export class AdminCreateTimetableResponseDto{

    @Field()
    readonly code : number;

    @Field()
    readonly message : string;

    @Field({nullable : true})
    readonly data : TimetableDto;
    
}