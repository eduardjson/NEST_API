import { Module } from '@nestjs/common';
import { AppService2 } from './app.service2';
// !
import { AppGateway } from './app.gateway';
import { PrismaService } from 'src/prisma';

@Module({
  imports: [],
  controllers: [],
  // !
  providers: [PrismaService, AppService2, AppGateway],
})
export class AppModule2 {}
