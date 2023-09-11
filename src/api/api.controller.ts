import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { Person } from './entities/api.entity';
import { FilterDto } from './dto/filter.dto';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createApiDto: CreateApiDto): Promise<unknown> {
    return await this.apiService.create(createApiDto);
  }

  @Get('/')
  async findAll(@Query() filterDto: FilterDto): Promise<Person[] | unknown> {
    return await this.apiService.findAll(filterDto);
  }

  @Get('/:user_id')
  async findOne(
    @Param('user_id', ParseIntPipe) user_id: number,
  ): Promise<unknown> {
    return await this.apiService.findOne(user_id);
  }

  @Patch('/:user_id')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  async update(
    @Param('user_id', ParseIntPipe) user_id: number,
    @Body() updateApiDto: UpdateApiDto,
  ): Promise<unknown> {
    return await this.apiService.update(user_id, updateApiDto);
  }

  @Delete('/:user_id')
  async remove(
    @Param('user_id', ParseIntPipe) user_id: number,
  ): Promise<unknown> {
    return await this.apiService.remove(user_id);
  }
}
