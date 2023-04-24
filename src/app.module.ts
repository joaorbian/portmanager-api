import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TechnologyModule } from './technology/technology.module';

@Module({
  imports: [UserModule, AuthModule, TechnologyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
