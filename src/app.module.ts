import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { ParentsModule } from './parents/parents.module';
import { AccountantModule } from './accountant/accountant.module';
import { AdminModule } from './admin/admin.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [StudentModule, TeacherModule, ParentsModule, AccountantModule, AdminModule 
    , GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gql',
    playground : true,
    introspection : true,
    context: ({ req }) => ({ req })
  }),
    MongooseModule.forRoot('mongodb+srv://atif:dbUserPassword@cluster0.x15aw.mongodb.net/school-management-system?retryWrites=true&w=majority'),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
