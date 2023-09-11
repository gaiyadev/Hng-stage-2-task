import { IsAlpha, IsNotEmpty } from 'class-validator';

export class CreateApiDto {
  @IsAlpha()
  @IsNotEmpty()
  name: string;
}
