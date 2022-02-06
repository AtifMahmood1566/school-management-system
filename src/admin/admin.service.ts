import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher } from '.././entities/teacher.entity';
import { Admin } from '.././entities/admin.entity';
import { AdminSignupInput } from './inputs/adminSignup.input';
import { adminTeacherSignupInput } from './inputs/adminTeacherSignup.input';
import { Student } from '.././entities/student.entity';
import { adminStudentSignupInput } from './inputs/adminStudentSignup.input';
import { Accountant } from '.././entities/accountant.entity';
import { adminAccoutantSignupInput } from './inputs/adminAccountantSignup.input';
import { Subject } from '.././entities/subject.entity';
import { adminEnterSubjectInput } from './inputs/adminEnterSubject.input';
import { Parent } from '.././entities/parent.entity';
import { adminParentSignupInput } from './inputs/adminParentSignup.input';

@Injectable()
export class AdminService {

  constructor(
    @InjectModel(Admin.name) private adminModel: Model<Admin>,
    @InjectModel(Teacher.name) private teacherModel: Model<Teacher>,
    @InjectModel(Student.name) private studentModel: Model<Student>,
    @InjectModel(Accountant.name) private accountantModel: Model<Accountant>,
    @InjectModel(Subject.name) private subjectModel: Model<Subject>,
    @InjectModel(Parent.name) private parentModel : Model<Parent>
  ) { }

  // funtion to signup amdin 
  async create(adminSignupInput: AdminSignupInput) {
    try {
      const amdin = new this.adminModel(adminSignupInput);
      const adminCreated = await amdin.save();

      let apiResponse = {
        code: 200,
        message: "Admin is successfully created",
        data: adminCreated
      }
      return apiResponse;
    }
    catch
    {
      let apiResponse = {
        code: 204,
        message: "Some error in creating amdin "
      }
      return apiResponse;
    }
  }

  adminCreateTeacher(adminTeacherInput: adminTeacherSignupInput) {
    try {
      const teacher = new this.teacherModel(adminTeacherInput);
      const teacherCreated = teacher.save();

      let apiResponse = {
        code: 200,
        message: "Teacher is successfully added",
        data: teacherCreated
      }
      return apiResponse;
    }
    catch
    {
      let apiResponse = {
        code: 204,
        message: "Some error in creating teacher "
      }
      return apiResponse;
    }
  }

  adminCreateStudent(adminStudentInput: adminStudentSignupInput) {
    try {
      const student = new this.studentModel(adminStudentInput);
      const studentCreated = student.save();

      let apiResponse = {
        code: 200,
        message: "Student is successfully added",
        data: studentCreated
      }
      return apiResponse;
    }
    catch
    {
      let apiResponse = {
        code: 204,
        message: "Some error in creating teacher "
      }
      return apiResponse;
    }
  }

  adminCreateAccountant(adminAccountantInput: adminAccoutantSignupInput) {
    try {
      const accountant = new this.accountantModel(adminAccountantInput);
      const accountantCreated = accountant.save();

      let apiResponse = {
        code: 200,
        message: "Accountant is successfully added",
        data: accountantCreated
      }
      return apiResponse;
    }
    catch
    {
      let apiResponse = {
        code: 204,
        message: "Some error in creating accountant "
      }
      return apiResponse;
    }
  }

  adminEnterSubject(adminSubjectInput: adminEnterSubjectInput) 
  {
    try {
      const subject = new this.subjectModel(adminSubjectInput);
      const subjectCreated = subject.save();

      let apiResponse = {
        code: 200,
        message: "Subject is successfully added",
        data: subjectCreated
      }
      return apiResponse;
    }
    catch
    {
      let apiResponse = {
        code: 204,
        message: "Some error in creating subject "
      }
      return apiResponse;
    }
  }

  adminCreateParent(adminParentInput : adminParentSignupInput)
  {
    try {
      const parent = new this.parentModel(adminParentInput);
      const parentCreated = parent.save();

      let apiResponse = {
        code: 200,
        message: "Parent is successfully added",
        data: parentCreated
      }
      return apiResponse;
    }
    catch
    {
      let apiResponse = {
        code: 204,
        message: "Some error in creating parent "
      }
      return apiResponse;
    }
  }

}


