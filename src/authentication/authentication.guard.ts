import { CanActivate, ConsoleLogger, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { InjectModel } from "@nestjs/mongoose";
import * as jwt from 'jsonwebtoken';
import { Model } from "mongoose";
import { Roles } from ".././entities/roles.entity";
import { RoleMapping } from ".././entities/rolesMappin.entity";

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(
    @InjectModel(Roles.name) private rolesModel: Model<Roles>,
    @InjectModel(RoleMapping.name) private rolesMappingModel: Model<RoleMapping>
  ) { }
  async canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context)
    const { req } = ctx.getContext();

    //checking if the token exists
    if (!req.headers.authorization) {
      throw new UnauthorizedException()
    }

    try {
      const Token = jwt.verify(
        req.headers.authorization,
        'SECRET'
      );


      const decodedToken = jwt.decode(req.headers.authorization);

      const userRolesMapping = await this.rolesMappingModel.findOne({ userId: decodedToken.id })

      const userRole = await this.rolesModel.findOne({ _id: userRolesMapping.roleId })

      console.log("user from authentication is : ", decodedToken.id)
      console.log("role from token is : ", decodedToken.roles)
      console.log("user role from authentication is : ", userRole)

      if (userRole.name != decodedToken.roles) {
        throw new UnauthorizedException()
      }
      
      return true;

      // req.user = { ...decodedToken }
    } catch (error) {
      const decodedToken = jwt.decode(req.headers.authorization);
      console.log(error);
      let message = error.message;
      if (message.includes('jwt expired')) {
        message = 'Your session has expired. Please login again.';
      }
      throw new UnauthorizedException(
        {
          code: 400,
          message,
          email: decodedToken.email,
        },
        error.message,
      );
    }
  }
}