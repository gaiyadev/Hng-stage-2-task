import { IsOptional } from 'class-validator';

export class FilterDto {
  @IsOptional()
  search: string;
}
