import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateDTO{

     @IsNumber()
     event: number;

     @IsNumber()
     service: number;
 }