import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({collection : 'subjects'})
export class Subject extends Document{
    @Prop()
    name: string

    @Prop()
    subjectCode : string

}
export const SubjectSchema = SchemaFactory.createForClass(Subject);
