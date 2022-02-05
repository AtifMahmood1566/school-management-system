import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AccountantService } from './accountant.service';
import { Accountant } from '.././entities/accountant.entity';
import { AccoutantDto } from './dto/accountant.dto';
// import { CreateAccountantInput } from './dto/create-accountant.input';
// import { UpdateAccountantInput } from './dto/update-accountant.input';

@Resolver()
export class AccountantResolver {
  constructor(private readonly accountantService: AccountantService) {}

  // @Mutation(() => Accountant)
  // createAccountant(@Args('createAccountantInput') createAccountantInput: CreateAccountantInput) {
  //   return this.accountantService.create(createAccountantInput);
  // }

  @Query(() => [AccoutantDto], { name: 'accountant' })
  findAll() {
    return this.accountantService.findAll();
  }

  @Query(() => AccoutantDto, { name: 'accountant' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.accountantService.findOne(id);
  }

  // @Mutation(() => Accountant)
  // updateAccountant(@Args('updateAccountantInput') updateAccountantInput: UpdateAccountantInput) {
  //   return this.accountantService.update(updateAccountantInput.id, updateAccountantInput);
  // }

  @Mutation(() => AccoutantDto)
  removeAccountant(@Args('id', { type: () => Int }) id: number) {
    return this.accountantService.remove(id);
  }
}
