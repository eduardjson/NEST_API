import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { JWTAuthGuard } from './auth/guards/jwt-auth.guard';
import { AppGateway } from './app/app.gateway';
import { AppModule2 } from './app/app.module2';
import { AppService2 } from './app/app.service2';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    PrismaModule,
    AuthModule,
    ProductModule,
    UserModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JWTAuthGuard,
    },
    AppService2,
    AppGateway,
  ],
})
export class AppModule {}
