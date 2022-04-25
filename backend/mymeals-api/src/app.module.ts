import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { CategoryModule } from './modules/category/category.module';
import { FoodModule } from './modules/food/food.module';

@Module({
  imports: [AuthModule, UserModule, CategoryModule, FoodModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
