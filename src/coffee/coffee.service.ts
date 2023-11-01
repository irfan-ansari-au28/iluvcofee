import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffee } from 'entity/coffee.entity';

@Injectable()
export class CoffeeService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Rohn',
      brand: 'buddy brew',
      flavors: ['choclate', 'vanila'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new HttpException(`Coffee #${id} not found `, HttpStatus.NOT_FOUND);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: string, upadatCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    // if (!existingCoffee) {
    //   // update the existing entity
    //   return 'Update logic yet to implement';
    // }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
