import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateServiceDTO{

    @IsString()
    title: string;
    
    @IsString()
    description: string;

    @IsNumber()
    prise: number; 

    @IsString()
    imagen: string;

    @IsNumber()
    type: number;

    @IsNumber()
    empresa: number;
}