import { IsString } from 'class-validator';

export class TypeEventDTO {
  @IsString()
  name: string;
}
