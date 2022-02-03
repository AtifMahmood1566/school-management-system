import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({ collection: 'student-attendance' })
export class StudentAttendance extends Document {
    
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'students' })
    studentId: mongoose.Schema.Types.ObjectId

    @Prop()
    date: Date

    @Prop()
    isPresent: boolean

}
export const AdminSchema = SchemaFactory.createForClass(StudentAttendance);
