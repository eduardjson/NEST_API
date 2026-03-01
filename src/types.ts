import { Prisma } from 'generated/prisma/client';

// { id?: number, text?: string }
export type MessageUpdatePayload = Prisma.MessageWhereUniqueInput &
  Pick<Prisma.MessageUpdateInput, 'text'>;

export type UserInfo = {
  userId: string;
  userName: string;
};
