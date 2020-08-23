import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateTypeDTO{

    @IsString()
    name: string; 
}