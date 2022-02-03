import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({collection : 'assignments'})
export class Assignment extends Document{

    @Prop({type : mongoose.Schema.Types.ObjectId , ref : 'students'})
    studentId : mongoose.Schema.Types.ObjectId

    @Prop()
    class : number
    
    @Prop({type : mongoose.Schema.Types.ObjectId , ref : 'subjects'})
    subject : mongoose.Schema.Types.ObjectId

    @Prop()
    assignmentNo : number
    
    @Prop()
    totalMarks : number

    @Prop({default : 0})
    obtainedMarks : number
    
    @Prop({default : false})
    isSubmitted : boolean

}
export const AssignmentSchema = SchemaFactory.createForClass(Assignment);
