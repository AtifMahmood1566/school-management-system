import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({collection : 'time-table'})
export class TimeTable extends Document{

    @Prop({type : mongoose.Schema.Types.ObjectId , ref : 'teachers'})
    teacherId: mongoose.Schema.Types.ObjectId

    @Prop()
    day : string
    
    @Prop()
    slot : string

    @Prop({type : mongoose.Schema.Types.ObjectId , ref : 'subjects'})
    subject : mongoose.Schema.Types.ObjectId

    @Prop()
    roomNo : number
    
}
export const TimeTableSchema = SchemaFactory.createForClass(TimeTable);
