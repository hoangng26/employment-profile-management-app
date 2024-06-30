import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { ImageModule } from './modules/image/image.module';
import { PositionModule } from './modules/position/position.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, EmployeeModule, ImageModule, PositionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
