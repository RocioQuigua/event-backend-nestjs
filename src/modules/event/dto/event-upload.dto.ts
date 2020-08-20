import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class EventUploadDTO{
    @IsNumber()
    id: string;

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    participants: number;

    @IsString()
    startDate: string;

    @IsNumber()
    duration: number;

    @IsNumber()
    type: number; 
}