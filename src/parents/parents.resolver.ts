import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ParentsService } from './parents.service';
import { parentsLoginResponseDto } from './ParentsApiResponsesDtos/parentsLoginResponse.dto';
import { parentsLoginInput } from './inputs/parentsLogin.input';

@Resolver()
export class ParentsResolver {
  constructor(private readonly parentsService: ParentsService) {}

  @Mutation(() => parentsLoginResponseDto)
  async parentsLogin(@Args('input') parentsLoginCredentials : parentsLoginInput) 
  {
    return await this.parentsService.loginParent(parentsLoginCredentials);
  }
}
