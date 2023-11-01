import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeeService } from 'src/coffee/coffee.service';
import { Coffee } from 'src/coffees/entity/coffee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flavor } from './entity/flavor.entity/flavor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor])],
  controllers: [CoffeesController],
  providers: [CoffeeService],
})
export class CoffeesModule {}
