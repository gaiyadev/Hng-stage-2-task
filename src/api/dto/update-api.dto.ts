import { IsAlpha, IsNotEmpty } from 'class-validator';

export class UpdateApiDto {
  @IsAlpha()
  @IsNotEmpty()
  name: string;
}
