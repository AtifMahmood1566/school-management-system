import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { AdminSignupResponseDto } from './ApiResponsesDtos/adminSignupResponse.dto';
import { AdminDto } from './dto/admin.dto';
import { AdminSignupInput } from './inputs/adminSignup.input';

@Resolver()
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  // mutation for admin signup
  @Mutation(() => AdminSignupResponseDto)
  adminRegistration(@Args('input') adminSignupInput: AdminSignupInput) {
    return this.adminService.create(adminSignupInput);
  }

  @Query(() => [AdminDto], { name: 'admin' })
  findAll() {
    return this.adminService.findAll();
  }

  @Query(() => AdminDto, { name: 'admin' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.adminService.findOne(id);
  }

  // @Mutation(() => Admin)
  // updateAdmin(@Args('updateAdminInput') updateAdminInput: UpdateAdminInput) {
  //   return this.adminService.update(updateAdminInput.id, updateAdminInput);
  // }

  @Mutation(() => AdminDto)
  removeAdmin(@Args('id', { type: () => Int }) id: number) {
    return this.adminService.remove(id);
  }
}
