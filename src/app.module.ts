import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { TecnologyModule } from './modules/tecnology/tecnology.module';

@Module({
  imports: [UserModule, AuthModule, TecnologyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
