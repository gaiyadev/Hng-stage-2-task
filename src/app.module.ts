import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './api/entities/api.entity';

@Module({
  imports: [
    ApiModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './data/database.sqlite',
      entities: [Person], // Include your entity classes here
      synchronize: true, // Only set this to true in development, not in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
