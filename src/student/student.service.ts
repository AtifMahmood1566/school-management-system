import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from '.././entities/student.entity';
import { studentsLoginInput } from './inputs/studentsLogin.input';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class StudentService {

  constructor(
    @InjectModel(Student.name) private studentModel : Model<Student>
  ){}
  
  async loginStudent( studentsLoginCredentials : studentsLoginInput)
  {
    try {
      const student = await this.studentModel.findOne({
        $and: [
          { email: { $eq: studentsLoginCredentials.email } },
          { password: { $eq: studentsLoginCredentials.password } }
        ]
      })

      if (!student) {
        let apiResponse = {
          code: 404,
          message: "Your email or password might be wrong"
        }

        return apiResponse
      }
      else {

        const studentForToken = {
          email : student.email,
          password : student.password
        }

        const jwtToken = await jwt.sign(studentForToken , 'SECRET') 

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
