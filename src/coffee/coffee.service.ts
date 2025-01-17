import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeeService {
    private coffee : Coffee[] = [
        {
            id : 5,
            name : 'Café com Leite',
            brand : "Abo 3of",
            falvors : ["chocolate" , "vanilla"]
        }
    ]



    findAll(){
        return this.coffee;
    }

    findOne(id : string){
        return this.coffee.find(item => item.id === +id)
    }


    create(createCoffeeDto : any){
        this.coffee.push(createCoffeeDto)
    }


    update(id : string , updateCoffeeDto){
        const existingCoffee = this.findOne(id)
        if(existingCoffee){

        }
    }

    remove(id : string){
        const coffeeIndex = this.coffee.findIndex(item => item.id ===+id)
        if(coffeeIndex >=0){
            this.coffee.splice(coffeeIndex , 1)
        }
    }
}


