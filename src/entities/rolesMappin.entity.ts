import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({collection : 'user-roles-mapping'})
export class RoleMapping extends Document{

   @Prop()
   userId : mongoose.Schema.Types.ObjectId

   @Prop()
   roleId : mongoose.Schema.Types.ObjectId

}
export const RoleMappingSchema = SchemaFactory.createForClass(RoleMapping);
