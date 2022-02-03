import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({collection : 'fees'})
export class Fees extends Document{
    
    @Prop({type : mongoose.Schema.Types.ObjectId , ref : 'students'})
    studentId : mongoose.Schema.Types.ObjectId

    @Prop()
    monthlyFees : number
    
    @Prop()
    concession : number

    @Prop()
    amountPaid : number

    @Prop()
    date : Date

    @Prop({default : false})
    isPaid : boolean

}
export const FeesSchema = SchemaFactory.createForClass(Fees);
