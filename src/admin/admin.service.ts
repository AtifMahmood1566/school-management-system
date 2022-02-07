import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
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
import { TimeTable } from '.././entities/timetable.entity';
import { adminCreateTimetableInput } from './inputs/adminCreateTimetable.input';
import { adminLoginInput } from './inputs/adminLogin.input';
import { AdminUpdateCredentialsInput } from './inputs/adminUpdateCredentials.input';

@Injectable()
export class AdminService {

  constructor(
    @InjectModel(Admin.name) private adminModel: Model<Admin>,
    @InjectModel(Teacher.name) private teacherModel: Model<Teacher>,
    @InjectModel(Student.name) private studentModel: Model<Student>,
    @InjectModel(Accountant.name) private accountantModel: Model<Accountant>,
    @InjectModel(Subject.name) private subjectModel: Model<Subject>,
    @InjectModel(Parent.name) private parentModel: Model<Parent>,
    @InjectModel(TimeTable.name) private timetableModel: Model<TimeTable>
  ) { }

  // funtion to signup amdin 
  async create(adminSignupInput: AdminSignupInput) {
    try {
      const amdin = new this.adminModel(adminSignupInput);
      const adminCreated = amdin.save();

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
        code: 400,
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
        code: 400,
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
        code: 400,
        message: "Some error in creating student "
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
        code: 400,
        message: "Some error in creating accountant "
      }
      return apiResponse;
    }
  }

  adminEnterSubject(adminSubjectInput: adminEnterSubjectInput) {
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
        code: 400,
        message: "Some error in creating subject "
      }
      return apiResponse;
    }
  }

  adminCreateParent(adminParentInput: adminParentSignupInput) {
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
        code: 400,
        message: "Some error in creating parent "
      }
      return apiResponse;
    }
  }

  adminCreateTimetable(adminTimetableInput: adminCreateTimetableInput) {
    try {
      const timetable = new this.timetableModel(adminTimetableInput);
      const timetableCreated = timetable.save();

      let apiResponse = {
        code: 200,
        message: "Timetable is successfully added",
        data: timetableCreated
      }
      return apiResponse;
    }
    catch
    {
      let apiResponse = {
        code: 400,
        message: "Some error in creating timetable "
      }
      return apiResponse;
    }
  }

  async loginAdmin(adminLoginCredentials: adminLoginInput) {
    try {
      const admin = await this.adminModel.find({
        $and: [
          { email: { $eq: adminLoginCredentials.email } },
          { password: { $eq: adminLoginCredentials.password } }
        ]
      })

      if (admin.length == 0) {
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

  async updateAdminCredentials(adminCredentialsUpdate: AdminUpdateCredentialsInput) {

    try {
      const admin = await this.adminModel.findOne({ _id: { $eq: adminCredentialsUpdate._id } }).exec();

      if (!admin) {
        let apiResponse = {
          code: 404,
          message: "Admin not found"
        }

        return apiResponse
      }
      else {
        admin.name = adminCredentialsUpdate.name;
        admin.email = adminCredentialsUpdate.email;
        admin.password = adminCredentialsUpdate.password;

        const updatedAdmin = admin.save();

        let apiResponse = {
          code: 200,
          message: "Admin credentials are updated successfully",
          data: updatedAdmin
        }

        return apiResponse
      }
    }
    catch
    {
      let apiResponse = {
        code : 400,
        message : "Error in updating admin credentials"
      }

      return apiResponse
    }
  }

}


