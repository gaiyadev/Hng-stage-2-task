import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { Repository } from 'typeorm';
import { Person } from './entities/api.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterDto } from './dto/filter.dto';

@Injectable()
export class ApiService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  async create(createApiDto: CreateApiDto): Promise<Person | unknown> {
    try {
      const person = await this.personRepository.save(createApiDto);
      return {
        message: 'Added successfully',
        statusCode: 201,
        status: 'Success',
        data: {
          id: person.id,
          name: person.name,
        },
      };
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async findAll(filterDto: FilterDto): Promise<Person[] | unknown> {
    const { search } = filterDto;
    try {
      const query = this.personRepository
        .createQueryBuilder('person')
        .select(['person.id', 'person.name'])
        .orderBy({ id: 'DESC' });

      if (filterDto.search) {
        query.andWhere('person.name LIKE :search', {
          search: `%${search}%`,
        });
      }
      const data = await query.getMany();
      return {
        message: 'Fetched successfully',
        statusCode: 200,
        status: 'Success',
        data: data,
      };
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async findOne(user_id: number) {
    const person = await this.personRepository.findOne({
      where: { id: user_id },
      select: ['id', 'name'],
    });

    if (!person) {
      throw new NotFoundException();
    }
    return {
      message: 'Fetched successfully',
      statusCode: 200,
      status: 'Success',
      data: person,
    };
  }

  async update(user_id: number, updateApiDto: UpdateApiDto): Promise<unknown> {
    const findPerson = await this.personRepository.findOne({
      where: { id: user_id },
    });

    if (!findPerson) {
      throw new NotFoundException();
    }

    try {
      findPerson.name = updateApiDto.name;
      const updatePerson = await this.personRepository.save(findPerson);
      return {
        message: 'Updated successfully',
        statusCode: 201,
        status: 'Success',
        data: updatePerson,
      };
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async remove(user_id: number): Promise<any> {
    const delPerson = await this.personRepository.delete({ id: user_id });
    if (delPerson.affected === 0) {
      throw new NotFoundException();
    }
    return {
      message: 'Deleted successfully',
      statusCode: 200,
      status: 'Success',
      data: delPerson,
    };
  }
}
