import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { AdminAccountantSignupResponseDto } from './ApiResponsesDtos/adminAccountantSignupResponse.dto';
import { AdminAccountantUpdateCredentialsResponseDto } from './ApiResponsesDtos/adminAccountantUpdateCredentialsResponse.dto';
import { AdminCreateTimetableResponseDto } from './ApiResponsesDtos/adminCreateTimetableResponse.dto';
import { AdminEnterSubjectResponseDto } from './ApiResponsesDtos/adminEnterSubjectResponse.dto';
import { adminLoginResponseDto } from './ApiResponsesDtos/adminLoginResponse.dto';
import { AdminParentSignupResponseDto } from './ApiResponsesDtos/adminParentSignupResponse.dto';
import { AdminParentUpdateCredentialsResponseDto } from './ApiResponsesDtos/adminParentUpdateCredentialsResponse.dto';
import { AdminSignupResponseDto } from './ApiResponsesDtos/adminSignupResponse.dto';
import { AdminStudentSignupResponseDto } from './ApiResponsesDtos/adminStudentSignupResponse.dto';
import { AdminStudentUpdateCredentialsResponseDto } from './ApiResponsesDtos/adminStudentUpdateCredentials.dto';
import { AdminSubjectUpdateCredentialsResponseDto } from './ApiResponsesDtos/adminSubjectUpdateCredential.sdto';
import { AdminTeacherSignupResponseDto } from './ApiResponsesDtos/adminTeacherSignupResponse.dto';
import { AdminTeacherUpdateCredentialsResponseDto } from './ApiResponsesDtos/adminTeacherUpdateCredentials.dto';
import { AdminTimetableUpdateCredentialsResponseDto } from './ApiResponsesDtos/adminTimetableUpdateCredentials.dto';
import { AdminUpdateCredentialsResponseDto } from './ApiResponsesDtos/adminUpdateCredentials.dto';
import { adminAccoutantSignupInput } from './inputs/adminAccountantSignup.input';
import { adminAccoutantUpdateCredentialsInput } from './inputs/adminAccountantUpdateCredentials.input';
import { adminCreateTimetableInput } from './inputs/adminCreateTimetable.input';
import { adminEnterSubjectInput } from './inputs/adminEnterSubject.input';
import { adminLoginInput } from './inputs/adminLogin.input';
import { adminParentSignupInput } from './inputs/adminParentSignup.input';
import { adminParentUpdateCredentialsInput } from './inputs/adminParentUpdateCredentials.input';
import { AdminSignupInput } from './inputs/adminSignup.input';
import { adminStudentSignupInput } from './inputs/adminStudentSignup.input';
import { adminStudentUpdateCredentialsInput } from './inputs/adminStudentUpdateCredentials.input';
import { adminSubjectUpdateCredentialsInput } from './inputs/adminSubjectUpdateCredentials.input';
import { adminTeacherSignupInput } from './inputs/adminTeacherSignup.input';
import { adminTeacherUpdateCredentialsInput } from './inputs/adminTeacherUpdateCredentials.input';
import { adminTimetableUpdateCredentialsInput } from './inputs/adminTimetableUpdateCredentials.input';
import { AdminUpdateCredentialsInput } from './inputs/adminUpdateCredentials.input';

@Resolver()
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  // mutation for admin signup
  @Mutation(() => AdminSignupResponseDto)
  async adminRegistration(@Args('input') adminSignupInput: AdminSignupInput) {
    return await this.adminService.create(adminSignupInput);
  }

  //mutation of admin to signup teacher
  @Mutation(() => AdminTeacherSignupResponseDto)
  async adminTeacherSignup(@Args('input') adminTeacherInput : adminTeacherSignupInput )
  {
    return await this.adminService.adminCreateTeacher(adminTeacherInput);
  }

  //mutation of admin to signup student
  @Mutation(() => AdminStudentSignupResponseDto)
  async adminStudentSignup(@Args('input') adminStudentInput : adminStudentSignupInput)
  {
    return await this.adminService.adminCreateStudent(adminStudentInput)
  }

  //mutation of admin to signup accountant
  @Mutation(() => AdminAccountantSignupResponseDto)
  async adminAccountantSignup(@Args('input') adminAccountantInput : adminAccoutantSignupInput)
  {
    return await this.adminService.adminCreateAccountant(adminAccountantInput)
  }

  //mutation of admin to enter or create subject
  @Mutation(() => AdminEnterSubjectResponseDto)
  async adminEnterSubject(@Args('input') adminSubjectInput : adminEnterSubjectInput)
  {
    return await this.adminService.adminEnterSubject(adminSubjectInput)
  }

  //mutation of admin to signup parent
  @Mutation(() => AdminParentSignupResponseDto)
  async adminParentSignup(@Args('input') adminParentInput : adminParentSignupInput)
  {
    return await this.adminService.adminCreateParent(adminParentInput)
  }

  //mutation of admin to create timetable
  @Mutation(() => AdminCreateTimetableResponseDto)
  async adminCreateTimetable(@Args('input') adminTimetableInput : adminCreateTimetableInput)
  {
    return await this.adminService.adminCreateTimetable(adminTimetableInput)
  }

  //mutation of admin to login 
  @Mutation(() => adminLoginResponseDto)
  async amdinLogin(@Args('input') adminLoginCredentials : adminLoginInput)
  {
    return await this.adminService.loginAdmin(adminLoginCredentials)
  }

  //mutation of admin to update amdin credntials
  @Mutation(() => AdminUpdateCredentialsResponseDto)
  async adminUpdateCredentials(@Args('input') adminCredentialsUpdate : AdminUpdateCredentialsInput)
  {
    return await this.adminService.updateAdminCredentials(adminCredentialsUpdate)
  }
  
  //mutation of admin to update parent credentials
  @Mutation(() => AdminParentUpdateCredentialsResponseDto)
  async adminParentUpdateCredentials(@Args('input') adminParentCeredentialsUpdate : adminParentUpdateCredentialsInput)
  {
    return await this.adminService.updateParentCredentials(adminParentCeredentialsUpdate)
  }

  //mutation of admin to update student credentials
  @Mutation(() => AdminStudentUpdateCredentialsResponseDto)
  async adminStudentUpdateCredentials(@Args('input') adminStudentCredentialsUpdate : adminStudentUpdateCredentialsInput)
  {
    return await this.adminService.updateStudentCredentials(adminStudentCredentialsUpdate)
  }

  //mutation of admin to update teacher credentials
  @Mutation(() => AdminTeacherUpdateCredentialsResponseDto)
  async adminTeacherUpdateCredentials(@Args('input') adminTeacherCredentialsUpdate : adminTeacherUpdateCredentialsInput)
  {
    return await this.adminService.updateTeacherCredentials(adminTeacherCredentialsUpdate)
  }

  //mutation of admin to update accountant credentials
  @Mutation(() => AdminAccountantUpdateCredentialsResponseDto)
  async adminAccountantUpdateCredentials(@Args('input') adminAccountantCredentialsUpdate : adminAccoutantUpdateCredentialsInput)
  {
    return await this.adminService.updateAccountantCredentials(adminAccountantCredentialsUpdate)
  }

  //mutation of admin to update subject credentials
  @Mutation(() => AdminSubjectUpdateCredentialsResponseDto)
  async adminSubjectUpdateCredentials(@Args('input') adminSubjectCredentialsUpdate : adminSubjectUpdateCredentialsInput)
  {
    return await this.adminService.updateSubjectCredentials(adminSubjectCredentialsUpdate)
  }

  //mutation of admin to update timetable credentials
  @Mutation(() => AdminTimetableUpdateCredentialsResponseDto)
  async adminTimeTableUpdateCredentials(@Args('input') adminTimetableCredentialsUpdate : adminTimetableUpdateCredentialsInput)
  {
    return await this.adminService.updateTimetableCredentials(adminTimetableCredentialsUpdate)
  }
}
