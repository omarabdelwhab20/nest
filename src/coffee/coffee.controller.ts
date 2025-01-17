import { Body, Controller , Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {

    constructor(private readonly coffeeService : CoffeeService){

    }

    @Get()
    findAll(@Query() paginationQuery){
        const {limit , offset} = paginationQuery
        return `this action returns all the coffee. Limit : ${limit} , Offset : ${offset}`;
    }


    @Get(":id")
    findOne(@Param("id") id:string){
        return `this action returns coffee with id ${id}`
    }


    @Post()
    create(@Body() body ){
        return body
    }


    @Patch(":id")
    update(@Param("id") id : string , @Body() Body){
        return `this action updates the coffee with the id ${id}`
    }


    @Delete(":id")
    delete(@Param("id") id : string){
        return `this action delets a coffee with the id ${id}`
    }
}
