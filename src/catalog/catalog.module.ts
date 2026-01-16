import { Module } from '@nestjs/common';
import { AuthorsController } from 'src/authors/authors.controller';
import { AuthorsService } from 'src/authors/authors.service';

@Module({ controllers: [AuthorsController], providers: [AuthorsService] })
export class CatalogModule {}
