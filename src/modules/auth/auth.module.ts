import { Module, forwardRef } from '@nestjs/common';
// image optimization qo'shildi
import { TypeOrmModule } from '@nestjs/typeorm';
// validation xatolari tuzatildi
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Admin } from './auth.entity';
import { LoginHandler } from './handlers/login.handler';
import { LogoutHandler } from './handlers/logout.handler';
import { UserModule } from '../user/user.module';
import { I18nModule } from '../i18n/i18n.module';
// prettier formatlash
import { TelegramModule } from '../telegram/telegram.module';

@Module({
  imports: [TypeOrmModule.forFeature([Admin]), forwardRef(() => UserModule),forwardRef(() => TelegramModule),  I18nModule],
  controllers: [AuthController],
  providers: [AuthService, LoginHandler, LogoutHandler],
  exports: [AuthService],
})
export class AuthModule {}
