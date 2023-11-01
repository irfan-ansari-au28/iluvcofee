import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeeService } from 'src/coffee/coffee.service';

@Module({
  controllers: [CoffeesController],
  providers: [CoffeeService],
})
export class CoffeesModule {}
