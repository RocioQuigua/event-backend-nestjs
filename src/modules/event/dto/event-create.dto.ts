import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class EventCreateDTO{

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

    @IsNumber()
    user: number;
}