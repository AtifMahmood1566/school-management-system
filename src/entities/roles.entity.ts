import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({collection : 'user-roles'})
export class Roles extends Document{

    @Prop()
    name: string

}
export const RolesSchema = SchemaFactory.createForClass(Roles);

