import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { ParentsModule } from './parents/parents.module';
import { AccountantModule } from './accountant/accountant.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [StudentModule, TeacherModule, ParentsModule, AccountantModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
