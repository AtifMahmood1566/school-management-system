import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
import * as mongoose from 'mongoose';

@Schema({collection : 'students'})
export class Student extends Document{
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
    rollNumber:  number

    @Prop()
    class: number

    @Prop()
    section: string

    @Prop({type : mongoose.Schema.Types.ObjectId , ref : 'parents'})
    parrentId : mongoose.Schema.Types.ObjectId

    @Prop({default : true})
    isStudent: boolean
}
export const StudentSchema = SchemaFactory.createForClass(Student);
StudentSchema.plugin(uniqueValidator)