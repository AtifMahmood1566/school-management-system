import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({ collection: 'results' })
export class Result extends Document {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'students' })
    studentId: mongoose.Schema.Types.ObjectId

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'subjects' })
    subject: mongoose.Schema.Types.ObjectId

    @Prop()
    class: number

    @Prop()
    totalMarks: number

    @Prop({ default: 0 })
    obtainedMarks: number

    @Prop()
    percentage: number
    
}
export const ResultSchema = SchemaFactory.createForClass(Result);
