import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({collection : 'parents'})
export class Parent extends Document{
    @Prop()
    name: string

    @Prop()
    email: string
    
    @Prop()
    password: string

    @Prop()
    gender : string

    @Prop()
    contactNo : number

}
export const ParentSchema = SchemaFactory.createForClass(Parent);
