import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher } from '.././entities/teacher.entity';
import { teachersLoginInput } from './inputs/teachersLogin.input';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class TeacherService {

  constructor(
    @InjectModel(Teacher.name) private teacherModel : Model<Teacher>
  ){}
 
  async loginTeacher(teachersLoginCredentials : teachersLoginInput)
  {
    try {
      const teacher = await this.teacherModel.findOne({
        $and: [
          { email: { $eq: teachersLoginCredentials.email } },
          { password: { $eq: teachersLoginCredentials.password } }
        ]
      })

      if (!teacher) {
        let apiResponse = {
          code: 404,
          message: "Your email or password might be wrong"
        }

        return apiResponse
      }
      else {

        const teacherForToken = {
          email : teacher.email,
          password : teacher.password
        }

        const jwtToken = await jwt.sign(teacherForToken , 'SECRET')

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

  findAll() {
    return `This action returns all admin`;
  }
}
