import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { JWTAuthGuard } from './auth/guards/jwt-auth.guard';
import { AttachmentsModule } from './entities/attachments/attachments.module';
import { ChatGateway } from './entities/chat/chat.gateway';
import { ChatService } from './entities/chat/chat.service';
import { ObjectModule } from './entities/object/object.module';
import { ProductModule } from './entities/product/product.module';
import { ShipmentModule } from './entities/shipment/shipment.module';
import { UserModule } from './entities/user/user.module';
import { WarehouseModule } from './entities/warehouse/warehouse.module';
import { PrismaModule } from './prisma';

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
    AttachmentsModule,
    WarehouseModule,
    ObjectModule,
    ShipmentModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JWTAuthGuard,
    },
    ChatService,
    ChatGateway,
  ],
})
export class AppModule {}
