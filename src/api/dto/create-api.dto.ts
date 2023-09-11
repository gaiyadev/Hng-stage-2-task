import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateApiDto {
  @IsString()
  @IsNotEmpty()
  @Matches('^[A-Za-z]+(?:[ _-][A-Za-z]+)*$', '', {
    message: 'name should contain only letters',
  })
  name: string;
}
