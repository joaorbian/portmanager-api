import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TechnologyModule } from './technology/technology.module';
import { LanguageModule } from './language/language.module';

@Module({
  imports: [UserModule, AuthModule, TechnologyModule, LanguageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
