import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({collection : 'quizzes'})
export class Quizz extends Document{

    @Prop({type : mongoose.Schema.Types.ObjectId , ref : 'students'})
    studentId : mongoose.Schema.Types.ObjectId

    @Prop()
    quizNo : number

    @Prop({type : mongoose.Schema.Types.ObjectId , ref : 'subjects'})
    subject : mongoose.Schema.Types.ObjectId

    @Prop()
    class : number
    
    @Prop()
    totalMarks : number

    @Prop({default : 0})
    obtainedMarks : number
    
    @Prop({default : false})
    isSubmitted : boolean

}
export const QuizzSchema = SchemaFactory.createForClass(Quizz);
