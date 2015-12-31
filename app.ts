"use strict";
namespace app.classes{
    export abstract class Vehicle{
        constructor(
            public horsepower: number,
            public numSeated: number,
            public manufacturer: string
        ){};
    }
    export class Car extends Vehicle{
        constructor(
            horsepower: number,
            numSeated: number,
            manufacturer: string,
            public category: string
        ){
            super(horsepower, numSeated,manufacturer);
        }

    }
    export class Motorcycle extends Vehicle {
        constructor(
            horsepower: number,
            numSeated: number,
            manufacturer: string,
            public looksCool: boolean
        ){
            super(horsepower, numSeated,manufacturer);
        }

    }
    export class Boat extends Vehicle{
        constructor(
            horsepower: number,
            numSeated: number,
            manufacturer: string,
            public numEngines: number
        ){
            super(horsepower, numSeated,manufacturer);
        }
    }
}
namespace app{
    // seed our array with a vehicle of each type
    let boat = new app.classes.Boat(200, 5, "wellcraft",1);
    let car = new app.classes.Car(600,2, "ford","sport car");
    let motorcycle = new app.classes.Motorcycle(500, 1, "yamaha",true);
    export let vehicles: app.classes.Vehicle [] = [boat,car, motorcycle];

    function displayVehicles()  {
        let elemString = "";
        vehicles.forEach((item) => elemString += `
        <div class="col=sm=12">
            <div class="well">
                <h1>${item.constructor.toString().match(/\w+/g)[1]}</h1>
                <h3>horsepower: ${item.horsepower}</h3>
                <h3>manufacturer: ${item.numSeated}</h3>
                <h3>number of seats: ${item.manufacturer}</h3>
            </div>
        </div>
        `);
        document.getElementById("vehicle-results").innerHTML = elemString;
    }

    //call functions
displayVehicles();
}
