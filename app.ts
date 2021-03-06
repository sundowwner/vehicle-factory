"use strict";
namespace app.classes{
    export abstract class Vehicle{
        /**
         * [constructor fo Vehicle class]
         * @param  {number} publichorsepower   [description]
         * @param  {number} publicnumSeated    [description]
         * @param  {string} publicmanufacturer [description]
         * @return {[type]}                    [description]
         */
        constructor(
            public horsepower: number,
            public numSeated: number,
            public manufacturer: string
        ){};
    }
    export class Car extends Vehicle{
        /**
         * Creates a new instance of the Car class
         * @param  {number} horsepower     [description]
         * @param  {number} numSeated      [description]
         * @param  {string} manufacturer   [description]
         * @param  {string} publiccategory [description]
         */
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
        /**
         * [constructor description]
         * @param  {number}  horsepower      [description]
         * @param  {number}  numSeated       [description]
         * @param  {string}  manufacturer    [description]
         * @param  {boolean} publiclooksCool [description]
         */
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
        /**
         * [constructor description]
         * @param  {number} horsepower       [description]
         * @param  {number} numSeated        [description]
         * @param  {string} manufacturer     [description]
         * @param  {number} publicnumEngines [description]
         * @return {[type]}                  [description]
         */
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
        //for the object
        vehicles.forEach((item) => elemString += `
        <div class="col=sm=12">
            <div class="well">
                <h1>${item.constructor.toString().match(/\w+/g)[1]}</h1>
                <h3>horsepower: ${item.horsepower}</h3>
                <h3>manufacturer: ${item.manufacturer}</h3>
                <h3>number of seats: ${item.numSeated}</h3>
            </div>
        </div>
        `);
        document.getElementById("vehicle-results").innerHTML = elemString;
    }
    export function selectType(select: HTMLSelectElement)   {
        let placeholder: string;
        if(select.value ==="Car") placeholder = "Category...";
        if(select.value === "Seating") placeholder = "Number of Engines....";
        if (select.value === "Manufacturer") placeholder = "Does it look cool? (yes, no)";

        console.log(select.value);
        document.getElementById("secondaryPropInput").innerHTML = `<input class="form-control" type="text" id="inputSecondary" placeholder="${placeholder}"/>`
    }
    function createVehicle(event: Event)    {
        //preventDefault() is preventing the page from refreshing from the form being submitted
        event.preventDefault();
        //get all the values from the inputs
        console.log("Create Vehicle");
        let horsepower = $("#inputHP").val();
        let numSeats = $("#inputNumSeats").val();
        let manufacturer = $("#inputManu").val();
        let type = $("#inputType").val();
        let secondary = $("#inputSecondary").val();

        //Create the "vehicle" object
        let vehicle: app.classes.Vehicle;
        if (type === "Car") vehicle = new
        app.classes.Car(horsepower, numSeats, manufacturer, secondary);
        if (type=== "Boat")vehicle = new app.classes.Boat(horsepower,numSeats,manufacturer,secondary);
        if (type ==="Motorcycle") vehicle = new app.classes.Motorcycle(horsepower,numSeats,manufacturer, secondary);

        //add the newly created vehicle to the vehicle array
        vehicles.push(vehicle);
        // redraw all of the vehicles
        displayVehicles();
    }
    //call functions
displayVehicles();

}
