import { IsString, IsNotEmpty } from "class-validator";

export class UpdateProfile{

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    secondName: string;

    @IsString()
    @IsNotEmpty()
    firstSurname: string;

    @IsString()
    secondSurname: string;

}