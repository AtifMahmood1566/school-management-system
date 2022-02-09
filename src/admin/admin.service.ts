import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import * as jwt from 'jsonwebtoken';

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
import { adminParentUpdateCredentialsInput } from './inputs/adminParentUpdateCredentials.input';
import { adminStudentUpdateCredentialsInput } from './inputs/adminStudentUpdateCredentials.input'
import { adminTeacherUpdateCredentialsInput } from './inputs/adminTeacherUpdateCredentials.input';
import { adminAccoutantUpdateCredentialsInput } from './inputs/adminAccountantUpdateCredentials.input';
import { adminSubjectUpdateCredentialsInput } from './inputs/adminSubjectUpdateCredentials.input';
import { adminTimetableUpdateCredentialsInput } from './inputs/adminTimetableUpdateCredentials.input';

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

      const today = new Date().getFullYear();
      const inputDob = teacher.dob.getFullYear();

      const age = today - inputDob;
      teacher.age = age;

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

      const today = new Date().getFullYear();
      const inputDob = student.dob.getFullYear();

      const age = today - inputDob;
      student.age = age;

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
      const today = new Date().getFullYear();
      const inputDob = accountant.dob.getFullYear();

      const age = today - inputDob;
      accountant.age = age;

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
      const admin = await this.adminModel.findOne({
        $and: [
          { email: { $eq: adminLoginCredentials.email } },
          { password: { $eq: adminLoginCredentials.password } }
        ]
      })

      if (!admin) {
        let apiResponse = {
          code: 404,
          message: "Your email or password might be wrong"
        }

        return apiResponse
      }
      else {

        const adminForToken = {
          email: admin.email,
          password: admin.password
        }

        const jwtToken = await jwt.sign(adminForToken, 'SECRET')

        let apiResponse = {
          code: 200,
          message: "You are successfully logged in",
          token: jwtToken
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
        code: 400,
        message: "Error in updating admin credentials"
      }

      return apiResponse
    }
  }

  async updateParentCredentials(adminParentCeredentialsUpdate: adminParentUpdateCredentialsInput) {
    try {
      const parent = await this.parentModel.findOne({ _id: { $eq: adminParentCeredentialsUpdate._id } }).exec();

      if (!parent) {
        let apiResponse = {
          code: 404,
          message: "Parent not found"
        }

        return apiResponse
      }
      else {
        parent.name = adminParentCeredentialsUpdate.name;
        parent.email = adminParentCeredentialsUpdate.email;
        parent.password = adminParentCeredentialsUpdate.password;
        parent.gender = adminParentCeredentialsUpdate.gender;
        parent.contactNo = adminParentCeredentialsUpdate.contactNo;

        const updatedParent = parent.save();

        let apiResponse = {
          code: 200,
          message: "Parent credentials are updated successfully",
          data: updatedParent
        }

        return apiResponse
      }
    }
    catch
    {
      let apiResponse = {
        code: 400,
        message: "Error in updating parent credentials"
      }

      return apiResponse
    }
  }

  async updateStudentCredentials(adminStudentCredentialsUpdate: adminStudentUpdateCredentialsInput) {
    try {
      const student = await this.studentModel.findOne({ _id: { $eq: adminStudentCredentialsUpdate._id } }).exec();

      if (!student) {
        let apiResponse = {
          code: 404,
          message: "Student not found"
        }

        return apiResponse
      }
      else {
        const today = new Date().getFullYear();
        const inputDob = adminStudentCredentialsUpdate.dob.getFullYear();

        const age = today - inputDob;
        student.age = age;


        student.name = adminStudentCredentialsUpdate.name;
        student.email = adminStudentCredentialsUpdate.email;
        student.password = adminStudentCredentialsUpdate.password;
        student.gender = adminStudentCredentialsUpdate.gender;
        student.religion = adminStudentCredentialsUpdate.religion;
        student.dob = adminStudentCredentialsUpdate.dob;
        student.address = adminStudentCredentialsUpdate.address;
        student.rollNumber = adminStudentCredentialsUpdate.rollNumber;
        student.class = adminStudentCredentialsUpdate.class;
        student.section = adminStudentCredentialsUpdate.section;
        student.parentId = adminStudentCredentialsUpdate.parentId;
        student.isStudent = adminStudentCredentialsUpdate.isStudent;

        const updatedStudent = student.save();

        let apiResponse = {
          code: 200,
          message: "Student credentials are updated successfully",
          data: updatedStudent
        }

        return apiResponse
      }
    }
    catch
    {
      let apiResponse = {
        code: 400,
        message: "Error in updating student credentials"
      }

      return apiResponse
    }
  }

  async updateTeacherCredentials(adminTeacherCredentialsUpdate: adminTeacherUpdateCredentialsInput) {
    try {
      const teacher = await this.teacherModel.findOne({ _id: { $eq: adminTeacherCredentialsUpdate._id } }).exec();

      if (!teacher) {
        let apiResponse = {
          code: 404,
          message: "Teacher not found"
        }

        return apiResponse
      }
      else {
        const today = new Date().getFullYear();
        const inputDob = adminTeacherCredentialsUpdate.dob.getFullYear();

        const age = today - inputDob;
        teacher.age = age;


        teacher.name = adminTeacherCredentialsUpdate.name;
        teacher.email = adminTeacherCredentialsUpdate.email;
        teacher.password = adminTeacherCredentialsUpdate.password;
        teacher.gender = adminTeacherCredentialsUpdate.gender;
        teacher.religion = adminTeacherCredentialsUpdate.religion;
        teacher.dob = adminTeacherCredentialsUpdate.dob;
        teacher.address = adminTeacherCredentialsUpdate.address;
        teacher.salary = adminTeacherCredentialsUpdate.salary;
        teacher.employeeId = adminTeacherCredentialsUpdate.employeeId;
        teacher.contactNo = adminTeacherCredentialsUpdate.contactNo;
        teacher.isTeacher = adminTeacherCredentialsUpdate.isTeacher;

        const updatedTeacher = teacher.save();

        let apiResponse = {
          code: 200,
          message: "Teacher credentials are updated successfully",
          data: updatedTeacher
        }

        return apiResponse
      }
    }
    catch
    {
      let apiResponse = {
        code: 400,
        message: "Error in updating teacher credentials"
      }

      return apiResponse
    }
  }

  async updateAccountantCredentials(adminAccountantCredentialsUpdate: adminAccoutantUpdateCredentialsInput) {
    try {
      const accountant = await this.accountantModel.findOne({ _id: { $eq: adminAccountantCredentialsUpdate._id } }).exec();

      if (!accountant) {
        let apiResponse = {
          code: 404,
          message: "Accountant not found"
        }

        return apiResponse
      }
      else {
        const today = new Date().getFullYear();
        const inputDob = adminAccountantCredentialsUpdate.dob.getFullYear();

        const age = today - inputDob;
        accountant.age = age;

        accountant.name = adminAccountantCredentialsUpdate.name;
        accountant.email = adminAccountantCredentialsUpdate.email;
        accountant.password = adminAccountantCredentialsUpdate.password;
        accountant.gender = adminAccountantCredentialsUpdate.gender;
        accountant.religion = adminAccountantCredentialsUpdate.religion;
        accountant.dob = adminAccountantCredentialsUpdate.dob;
        accountant.address = adminAccountantCredentialsUpdate.address;
        accountant.salary = adminAccountantCredentialsUpdate.salary;
        accountant.employeeId = adminAccountantCredentialsUpdate.employeeId;
        accountant.contactNo = adminAccountantCredentialsUpdate.contactNo;
        accountant.isAccountant = adminAccountantCredentialsUpdate.isAccountant;

        const updatedAccountant = accountant.save();

        let apiResponse = {
          code: 200,
          message: "Accountant credentials are updated successfully",
          data: updatedAccountant
        }

        return apiResponse
      }
    }
    catch
    {
      let apiResponse = {
        code: 400,
        message: "Error in updating accountant credentials"
      }

      return apiResponse
    }
  }

  async updateSubjectCredentials(adminSubjectCredentialsUpdate: adminSubjectUpdateCredentialsInput) {
    try {
      const subject = await this.subjectModel.findOne({ _id: { $eq: adminSubjectCredentialsUpdate._id } }).exec();

      if (!subject) {
        let apiResponse = {
          code: 404,
          message: "Subject not found"
        }

        return apiResponse
      }
      else {
        subject.name = adminSubjectCredentialsUpdate.name;
        subject.subjectCode = adminSubjectCredentialsUpdate.subjectCode;

        const updatedSubject = subject.save();

        let apiResponse = {
          code: 200,
          message: "Subject credentials are updated successfully",
          data: updatedSubject
        }

        return apiResponse
      }
    }
    catch
    {
      let apiResponse = {
        code: 400,
        message: "Error in updating subject credentials"
      }

      return apiResponse
    }
  }

  async updateTimetableCredentials(adminTimetableCredentialsUpdate: adminTimetableUpdateCredentialsInput) {
    try {
      const timetable = await this.timetableModel.findOne({ _id: { $eq: adminTimetableCredentialsUpdate._id } }).exec();

      if (!timetable) {
        let apiResponse = {
          code: 404,
          message: "Timetable not found"
        }

        return apiResponse
      }
      else {
        timetable.teacherId = adminTimetableCredentialsUpdate.teacherId;
        timetable.day = adminTimetableCredentialsUpdate.day;
        timetable.slot = adminTimetableCredentialsUpdate.slot;
        timetable.subject = adminTimetableCredentialsUpdate.subject;
        timetable.roomNo = adminTimetableCredentialsUpdate.roomNo;

        const updatedTimetable = timetable.save();

        let apiResponse = {
          code: 200,
          message: "Timetable credentials are updated successfully",
          data: updatedTimetable
        }

        return apiResponse
      }
    }
    catch
    {
      let apiResponse = {
        code: 400,
        message: "Error in updating timetable credentials"
      }

      return apiResponse
    }
  }

}


