import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Accountant } from '.././entities/accountant.entity';
import { accountantLoginInput } from './inputs/accountantLogin.input';

@Injectable()
export class AccountantService {

  constructor(
    @InjectModel(Accountant.name) private accountantModel : Model<Accountant>
  ){}

  async loginAccountant(accountantLoginCredentials : accountantLoginInput)
  {
    try {
      const accountant = await this.accountantModel.find({
        $and: [
          { email: { $eq: accountantLoginCredentials.email } },
          { password: { $eq: accountantLoginCredentials.password } }
        ]
      })

      if (accountant.length == 0) {
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
        code: 204,
        message: "Some error in logging in"
      }

      return apiResponse
    }
  }

}
