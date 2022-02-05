import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { Admin } from '.././entities/admin.entity';
import { AdminDto } from './dto/admin.dto';
// import { CreateAdminInput } from './dto/create-admin.input';
// import { UpdateAdminInput } from './dto/update-admin.input';

@Resolver()
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  // @Mutation(() => Admin)
  // createAdmin(@Args('createAdminInput') createAdminInput: CreateAdminInput) {
  //   return this.adminService.create(createAdminInput);
  // }

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
