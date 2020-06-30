import { IsNotEmpty, IsString, IsEmail } from "class-validator";

export class Register {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  secondName: string;

  @IsNotEmpty()
  @IsString()
  firstSurname: string;

  @IsNotEmpty()
  @IsString()
  secondSurname: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
