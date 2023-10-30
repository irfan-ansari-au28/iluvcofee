import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { CoffeeService } from 'src/coffee/coffee.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeeService) {}
  //   @Get()
  //   findAll() {
  //     return 'List of all coffes';
  //   }

  // Native Approse --> use carefully [lost controll on Nest features]
  //   @Get()
  //   findAll(@Res() response) {
  //     response.status(200).send('This action returns all coffee');
  //   }

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    // return `This action returns all coffee offset:${offset} limit:${limit}`;
    return this.coffeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return `this action returns #${id} coffee`;
    return this.coffeeService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    // @Body('name) --> use with caution, validation issues
    // return body;
    return this.coffeeService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    // return `This action updates #${id}  coffee`;
    return this.coffeeService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return `This action removes ${id} coffee`;
    return this.coffeeService.remove(id);
  }
}
