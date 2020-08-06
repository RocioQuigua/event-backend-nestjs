import { IsString, IsNotEmpty } from "class-validator";

export class UpdateCompanyDTO{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    mision: string;

    @IsString()
    vision: string;

    @IsString()
    logo: string;

}