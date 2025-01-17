import { Body, Controller , Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {

    @Get()
    findAll(){
        return 'This action returns a list of all coffee';
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
