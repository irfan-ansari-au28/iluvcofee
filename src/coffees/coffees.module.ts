import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeeService } from 'src/coffee/coffee.service';
import { Coffee } from 'entity/coffee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee])],
  controllers: [CoffeesController],
  providers: [CoffeeService],
})
export class CoffeesModule {}
