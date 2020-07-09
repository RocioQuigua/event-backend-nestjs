import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class EventCreateDTO{
    @IsString()
    description: string;

    @IsNumber()
    participants: number;
}