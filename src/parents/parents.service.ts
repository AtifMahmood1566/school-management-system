import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Parent } from '.././entities/parent.entity';
import { parentsLoginInput } from './inputs/parentsLogin.input';
import * as jwt from 'jsonwebtoken';
import { RoleMapping } from '.././entities/rolesMappin.entity';
import { Roles } from '.././entities/roles.entity';

@Injectable()
export class ParentsService {

  constructor(
    @InjectModel(Parent.name) private parentModel : Model<Parent>,
    @InjectModel(Roles.name) private rolesModel: Model<Roles>,
    @InjectModel(RoleMapping.name) private rolesMappingModel: Model<RoleMapping>
  ){}
  
  async loginParent(parentsLoginCredentials : parentsLoginInput)
  {
    try {
      const parent = await this.parentModel.findOne({
        $and: [
          { email: { $eq: parentsLoginCredentials.email } },
          { password: { $eq: parentsLoginCredentials.password } }
        ]
      })

      if (!parent) {
        let apiResponse = {
          code: 404,
          message: "Your email or password might be wrong"
        }

        return apiResponse
      }
      else {

        const parentRoleMapping = await this.rolesMappingModel.findOne({ userId: parent._id })

        const parentRoles = await this.rolesModel.findOne({_id : parentRoleMapping.roleId})

        const parentForToken = {
          id : parent._id,
          email : parent.email,
          password : parent.password,
          roles : parentRoles.name
        }
        const jwtToken = await jwt.sign(parentForToken , 'SECRET')

        let apiResponse = {
          code: 200,
          message: "You are successfully logged in",
          token : jwtToken
        }

        return apiResponse
      }
    }
    catch
    {
      let apiResponse = {
        code: 400,
        message: "Some error in logging in"
      }

      return apiResponse
    }
  }

}

