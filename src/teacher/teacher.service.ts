import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher } from '.././entities/teacher.entity';
import { teachersLoginInput } from './inputs/teachersLogin.input';

@Injectable()
export class TeacherService {

  constructor(
    @InjectModel(Teacher.name) private teacherModel : Model<Teacher>
  ){}
 
  async loginTeacher(teachersLoginCredentials : teachersLoginInput)
  {
    try {
      const teacher = await this.teacherModel.find({
        $and: [
          { email: { $eq: teachersLoginCredentials.email } },
          { password: { $eq: teachersLoginCredentials.password } }
        ]
      })

      if (teacher.length == 0) {
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

  findAll() {
    return `This action returns all admin`;
  }
}
