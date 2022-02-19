import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AccountantService } from './accountant.service';
import { accountantLoginResponseDto } from './AccountantApiResponsesDtos/accountantLoginResponse.dto';
import { accountantLoginInput } from './inputs/accountantLogin.input'

@Resolver()
export class AccountantResolver {
  constructor(private readonly accountantService: AccountantService) {}

  @Mutation(() => accountantLoginResponseDto)
  async accountantLogin(@Args('input') accountantLoginCredentials : accountantLoginInput)
  {
    return await this.accountantService.loginAccountant(accountantLoginCredentials) 
  }
}
