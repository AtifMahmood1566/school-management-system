import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from '.././entities/admin.entity';
import { AdminSignupInput } from './inputs/adminSignup.input';

@Injectable()
export class AdminService {

  constructor(@InjectModel(Admin.name) private adminModel : Model<Admin>){}

  // funtion to signup amdin 
  create(adminSignupInput: AdminSignupInput) {
    try
    {
      const amdin = new this.adminModel(adminSignupInput);
      const adminCreated = amdin.save();
      
      let apiResponse = {
        code : 200,
        message : "Admin is successfully created",
        data : adminCreated
      }
      return apiResponse; 
    }
    catch
    {
      let apiResponse = {
        code : 204,
        message : "Some error in creating amdin "
      }
      return apiResponse; 
    } 
  }

  findAll() {
    return `This action returns all admin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  // update(id: number, updateAdminInput: UpdateAdminInput) {
  //   return `This action updates a #${id} admin`;
  // }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
