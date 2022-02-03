import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({collection : 'papers'})
export class Paper extends Document{

    @Prop({type : mongoose.Schema.Types.ObjectId , ref : 'students'})
    studentId : mongoose.Schema.Types.ObjectId

    @Prop({type : mongoose.Schema.Types.ObjectId , ref : 'subjects'})
    subject : mongoose.Schema.Types.ObjectId
    
    @Prop()
    totalMarks : number

    @Prop()
    class : number

    @Prop({default : 0})
    obtainedMarks : number

    @Prop()
    paperType : string
    
    @Prop({default : false})
    isSubmitted : boolean

}
export const PaperSchema = SchemaFactory.createForClass(Paper);
