import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({collection : 'teachers'})
export class Teacher extends Document{
    @Prop()
    name: string

    @Prop({unique : true})
    email: string
    
    @Prop()
    password: string

    @Prop()
    gender : string

    @Prop()
    religion : string

    @Prop({default : new Date()})
    joiningDate : Date

    @Prop()
    dob: Date

    @Prop()
    age : number

    @Prop()
    address: string

    @Prop()
    salary : number

    @Prop()
    employeeId : string;

    @Prop()
    contactNo : number

   @Prop({default : true})
   isTeacher : boolean
}
export const TeacherSchema = SchemaFactory.createForClass(Teacher);
