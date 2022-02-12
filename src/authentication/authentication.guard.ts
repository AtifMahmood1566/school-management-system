import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthenticationGuard implements CanActivate {
    async canActivate(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context)
        const { req } = ctx.getContext();

        //checking if the token exists
        if(!req.headers.authorization)
        {
            throw new UnauthorizedException()
        }
        
        try {
            const decodedToken = jwt.verify(
              req.headers.authorization,
              'SECRET'
            );
            // req.user = { ...decodedToken };
            return true;
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