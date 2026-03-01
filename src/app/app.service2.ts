import { Injectable } from '@nestjs/common';
import { Message, Prisma } from 'generated/prisma/client';
import { MessageUpdatePayload } from 'src/types';

import { PrismaService } from 'src/prisma';

@Injectable()
export class AppService2 {
  constructor(private readonly prisma: PrismaService) {}

  async getMessages(): Promise<Message[]> {
    return this.prisma.message.findMany();
  }

  async clearMessages(): Promise<Prisma.BatchPayload> {
    return this.prisma.message.deleteMany();
  }

  async createMessage(data: Prisma.MessageCreateInput) {
    return this.prisma.message.create({ data });
  }

  async updateMessage(payload: MessageUpdatePayload) {
    const { id, text } = payload;
    return this.prisma.message.update({ where: { id }, data: { text } });
  }

  async removeMessage(where: Prisma.MessageWhereUniqueInput) {
    return this.prisma.message.delete({ where });
  }
}
