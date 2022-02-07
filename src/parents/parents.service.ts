import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Parent } from '.././entities/parent.entity';
import { parentsLoginInput } from './inputs/parentsLogin.input';

@Injectable()
export class ParentsService {

  constructor(
    @InjectModel(Parent.name) private parentModel : Model<Parent>
  ){}
  
  async loginParent(parentsLoginCredentials : parentsLoginInput)
  {
    try {
      const parent = await this.parentModel.find({
        $and: [
          { email: { $eq: parentsLoginCredentials.email } },
          { password: { $eq: parentsLoginCredentials.password } }
        ]
      })

      if (parent.length == 0) {
        let apiResponse = {
          code: 404,
          message: "Your email or password might be wrong"
        }

        return apiResponse
      }
      else {
        let apiResponse = {
          code: 200,
          message: "You are successfully logged in"
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

