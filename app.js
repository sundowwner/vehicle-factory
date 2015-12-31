"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var classes;
    (function (classes) {
        var Vehicle = (function () {
            function Vehicle(horsepower, numSeated, manufacturer) {
                this.horsepower = horsepower;
                this.numSeated = numSeated;
                this.manufacturer = manufacturer;
            }
            ;
            return Vehicle;
        })();
        classes.Vehicle = Vehicle;
        var Car = (function (_super) {
            __extends(Car, _super);
            function Car(horsepower, numSeated, manufacturer, category) {
                _super.call(this, horsepower, numSeated, manufacturer);
                this.category = category;
            }
            return Car;
        })(Vehicle);
        classes.Car = Car;
        var Motorcycle = (function (_super) {
            __extends(Motorcycle, _super);
            function Motorcycle(horsepower, numSeated, manufacturer, looksCool) {
                _super.call(this, horsepower, numSeated, manufacturer);
                this.looksCool = looksCool;
            }
            return Motorcycle;
        })(Vehicle);
        classes.Motorcycle = Motorcycle;
        var Boat = (function (_super) {
            __extends(Boat, _super);
            function Boat(horsepower, numSeated, manufacturer, numEngines) {
                _super.call(this, horsepower, numSeated, manufacturer);
                this.numEngines = numEngines;
            }
            return Boat;
        })(Vehicle);
        classes.Boat = Boat;
    })(classes = app.classes || (app.classes = {}));
})(app || (app = {}));
var app;
(function (app) {
    var boat = new app.classes.Boat(200, 5, "wellcraft", 1);
    var car = new app.classes.Car(600, 2, "ford", "sport car");
    var motorcycle = new app.classes.Motorcycle(500, 1, "yamaha", true);
    app.vehicles = [boat, car, motorcycle];
    function displayVehicles() {
        var elemString = "";
        app.vehicles.forEach(function (item) { return elemString += "\n        <div class=\"col=sm=12\">\n            <div class=\"well\">\n                <h1>" + item.constructor.toString().match(/\w+/g)[1] + "</h1>\n                <h3>horsepower: " + item.horsepower + "</h3>\n                <h3>manufacturer: " + item.manufacturer + "</h3>\n                <h3>number of seats: " + item.numSeated + "</h3>\n            </div>\n        </div>\n        "; });
        document.getElementById("vehicle-results").innerHTML = elemString;
    }
    function selectType(select) {
        var placeholder;
        if (select.value === "Car")
            placeholder = "Category...";
        if (select.value === "Seating")
            placeholder = "Number of Engines....";
        if (select.value === "Manufacturer")
            placeholder = "Does it look cool? (yes, no)";
        console.log(select.value);
        document.getElementById("secondaryPropInput").innerHTML = "<input class=\"form-control\" type=\"text\" id=\"inputSecondary\" placeholder=\"" + placeholder + "\"/>";
    }
    app.selectType = selectType;
    function createVehicle(event) {
        event.preventDefault();
        console.log("Create Vehicle");
        var horsepower = $("#inputHP").val();
        var numSeats = $("#inputNumSeats").val();
        var manufacturer = $("#inputManu").val();
        var type = $("#inputType").val();
        var secondary = $("#inputSecondary").val();
        var vehicle;
        if (type === "Car")
            vehicle = new app.classes.Car(horsepower, numSeats, manufacturer, secondary);
        if (type === "Boat")
            vehicle = new app.classes.Boat(horsepower, numSeats, manufacturer, secondary);
        if (type === "Motorcycle")
            vehicle = new app.classes.Motorcycle(horsepower, numSeats, manufacturer, secondary);
        app.vehicles.push(vehicle);
        displayVehicles();
    }
    displayVehicles();
})(app || (app = {}));
