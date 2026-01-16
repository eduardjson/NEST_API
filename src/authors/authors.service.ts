import { Injectable, NotImplementedException } from '@nestjs/common';
import {
  CreateAuthorDTO,
  ReadAuthorDTO,
  ReadManyAuthorsDTO,
  ReadManyAuthorsQueryDTO,
} from './dto';

@Injectable()
export class AuthorsService {
  getMany(query: ReadManyAuthorsQueryDTO): Promise<ReadManyAuthorsDTO> {
    throw new NotImplementedException(`Method not implemented ${query}`);
  }
  getOne(authorId: string): Promise<ReadAuthorDTO> {
    throw new NotImplementedException(`Method not implemented ${authorId}`);
  }
  create(data: CreateAuthorDTO): Promise<string> {
    throw new NotImplementedException(`Method not implemented ${data}`);
  }
  update(authorId: string, data: CreateAuthorDTO): Promise<void> {
    throw new NotImplementedException(`Method not implemented ${data}`);
  }
  delete(authorId: string): Promise<void> {
    throw new NotImplementedException(`Method not implemented ${authorId}`);
  }
}
