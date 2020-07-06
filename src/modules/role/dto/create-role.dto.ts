import { IsString, IsNotEmpty } from "class-validator";

export class CreateRoleDTO{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    state: string;

}