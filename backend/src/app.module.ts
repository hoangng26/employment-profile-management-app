import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { PositionResourceModule } from './modules/position-resource/position-resource.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, EmployeeModule, PositionResourceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
