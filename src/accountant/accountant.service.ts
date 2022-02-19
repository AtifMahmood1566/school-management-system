import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Accountant } from '.././entities/accountant.entity';
import { accountantLoginInput } from './inputs/accountantLogin.input';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AccountantService {

  constructor(
    @InjectModel(Accountant.name) private accountantModel : Model<Accountant>
  ){}

  async loginAccountant(accountantLoginCredentials : accountantLoginInput)
  {
    try {
      const accountant = await this.accountantModel.findOne({
        $and: [
          { email: { $eq: accountantLoginCredentials.email } },
          { password: { $eq: accountantLoginCredentials.password } }
        ]
      })

      if (!accountant) {
        let apiResponse = {
          code: 404,
          message: "Your email or password might be wrong"
        }

        return apiResponse
      }
      else {

        const accountantForToken = {
          email : accountant.email,
          password : accountant.password
        }

        const jwtToken = await jwt.sign(accountantForToken , 'SECRET')

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
