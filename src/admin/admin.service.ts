import { Injectable, Req } from '@nestjs/common';
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
import { request } from 'express';
import { Roles } from '.././entities/roles.entity';
import { RoleMapping } from '.././entities/rolesMappin.entity';
import { adminCreateRoleInput } from './inputs/adminCreateRole.input';
import { adminCreateRolesMappingInput } from './inputs/adminCreateRolesMapping.input';
import { adminRolesUpdateCredentialsInput } from './inputs/adminRolesUpdateCredentials.input';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { adminRolesMappingUpdateCredentialsInput } from './inputs/adminRolesMappingUpdateCredentials.input';

@Injectable()
export class AdminService {

  constructor(
    @InjectModel(Admin.name) private adminModel: Model<Admin>,
    @InjectModel(Teacher.name) private teacherModel: Model<Teacher>,
    @InjectModel(Student.name) private studentModel: Model<Student>,
    @InjectModel(Accountant.name) private accountantModel: Model<Accountant>,
    @InjectModel(Subject.name) private subjectModel: Model<Subject>,
    @InjectModel(Parent.name) private parentModel: Model<Parent>,
    @InjectModel(TimeTable.name) private timetableModel: Model<TimeTable>,
    @InjectModel(Roles.name) private rolesModel: Model<Roles>,
    @InjectModel(RoleMapping.name) private rolesMappingModel: Model<RoleMapping>
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

        const adminRoleMapping = await this.rolesMappingModel.findOne({ userId: admin._id })

        const adminRoles = await this.rolesModel.findOne({_id : adminRoleMapping.roleId})

        console.log("role is : ", adminRoles.name  )
        const adminForToken = {
          id : admin._id,
          email : admin.email,
          password : admin.password,
          roles : adminRoles.name 
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
    catch(error)
    {
      let apiResponse = {
        code: 400,
        message: error.message
      }

      return apiResponse
    }
  }

  async updateAdminCredentials(adminCredentialsUpdate: AdminUpdateCredentialsInput) {

    try {
      const updatedAdmin = await this.adminModel.findByIdAndUpdate(adminCredentialsUpdate._id, { $set: adminCredentialsUpdate }, { new: true }).exec();

      if (!updatedAdmin) {
        let apiResponse = {
          code: 404,
          message: "Admin not found"
        }

        return apiResponse
      }
      else {

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
      const updatedParent = await this.parentModel.findByIdAndUpdate(adminParentCeredentialsUpdate._id, { $set: adminParentCeredentialsUpdate }, { new: true }).exec();

      if (!updatedParent) {
        let apiResponse = {
          code: 404,
          message: "Parent not found"
        }

        return apiResponse
      }
      else {

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
      const Student = await this.studentModel.findByIdAndUpdate(adminStudentCredentialsUpdate._id, { $set: adminStudentCredentialsUpdate }, { new: true }).exec();

      if (!Student) {
        let apiResponse = {
          code: 404,
          message: "Student not found"
        }

        return apiResponse
      }
      else {

        if (adminStudentCredentialsUpdate.dob) {
          const today = new Date().getFullYear();
          const inputDob = adminStudentCredentialsUpdate.dob.getFullYear();

          const age = today - inputDob;
          Student.age = age;
        }

        const updatedStudent = Student.save();

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
      const teacher = await this.teacherModel.findByIdAndUpdate(adminTeacherCredentialsUpdate._id, { $set: adminTeacherCredentialsUpdate }, { new: true }).exec();

      if (!teacher) {
        let apiResponse = {
          code: 404,
          message: "Teacher not found"
        }

        return apiResponse
      }
      else {
        if (adminTeacherCredentialsUpdate.dob) {
          const today = new Date().getFullYear();
          const inputDob = adminTeacherCredentialsUpdate.dob.getFullYear();

          const age = today - inputDob;
          teacher.age = age;
        }

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
      const accountant = await this.accountantModel.findByIdAndUpdate(adminAccountantCredentialsUpdate._id, { $set: adminAccountantCredentialsUpdate }, { new: true }).exec();

      if (!accountant) {
        let apiResponse = {
          code: 404,
          message: "Accountant not found"
        }

        return apiResponse
      }
      else {
        if (adminAccountantCredentialsUpdate.dob) {
          const today = new Date().getFullYear();
          const inputDob = adminAccountantCredentialsUpdate.dob.getFullYear();

          const age = today - inputDob;
          accountant.age = age;
        }

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
      const updatedSubject = await this.subjectModel.findByIdAndUpdate(adminSubjectCredentialsUpdate._id, { $set: adminSubjectCredentialsUpdate }, { new: true }).exec();

      if (!updatedSubject) {
        let apiResponse = {
          code: 404,
          message: "Subject not found"
        }

        return apiResponse
      }
      else {
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
      const updatedTimetable = await this.timetableModel.findByIdAndUpdate(adminTimetableCredentialsUpdate._id, { $set: adminTimetableCredentialsUpdate }, { new: true }).exec();

      if (!updatedTimetable) {
        let apiResponse = {
          code: 404,
          message: "Timetable not found"
        }

        return apiResponse
      }
      else {

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

  createRole(createRoleInput: adminCreateRoleInput) {
    try {
      const role = new this.rolesModel(createRoleInput)
      const roleCreated = role.save()

      let apiResponse = {
        code: 200,
        message: "Role is sucessfully created",
        data: roleCreated
      }

      return apiResponse
    }
    catch (error) {
      let apiResponse = {
        code: 400,
        message: error.message
      }

      return apiResponse
    }
  }

  createRolesMapping(createRolesMappingInput: adminCreateRolesMappingInput) {
    let apiResponse = {
      code: 0,
      message: "",
      data: null
    }

    try {
      const rolesMapping = new this.rolesMappingModel(createRolesMappingInput)
      const rolesMappingCreated = rolesMapping.save()

      apiResponse.code = 200,
        apiResponse.message = "Roles Mapping is successfully created",
        apiResponse.data = rolesMappingCreated
    }
    catch (error) {
      apiResponse.code = 400,
        apiResponse.message = error.message
    }

    return apiResponse
  }

  async updateRolesCredentials(adminRoleCredentialsUpdate: adminRolesUpdateCredentialsInput) {

    let apiResponse = {
      code: 0,
      message: "",
      data: null
    }

    try {

      const updatedRole = await this.rolesModel.findByIdAndUpdate(adminRoleCredentialsUpdate._id, { $set: adminRoleCredentialsUpdate }, { new: true })

      if (!updatedRole) {
        apiResponse.code = 400,
          apiResponse.message = "No user role found for this id "
      }
      else {

        apiResponse.code = 200,
          apiResponse.message = "Role is successfully updated",
          apiResponse.data = updatedRole
      }
    }
    catch (error) {
      apiResponse.code = 400,
        apiResponse.message = error.message
    }

    return apiResponse

  }

  async updateRolesMappingCredentials(adminRolesMappingCredentialsUpdate: adminRolesMappingUpdateCredentialsInput) {
    let apiResponse = {
      code: 0,
      message: "",
      data: null
    }

    try {
      const updatedrolesMapping = await this.rolesMappingModel.findByIdAndUpdate(adminRolesMappingCredentialsUpdate._id, { $set: adminRolesMappingCredentialsUpdate }, { new: true })

      if (!updatedrolesMapping) {
        apiResponse.code = 404,
          apiResponse.message = "No roles mapping found for this id"
      }
      else {

        apiResponse.code = 200,
          apiResponse.message = "Roles Mapping is successfully updated",
          apiResponse.data = updatedrolesMapping
      }
    }
    catch (error) {
      apiResponse.code = 400,
        apiResponse.message = error.message
    }

    return apiResponse
  }

}


