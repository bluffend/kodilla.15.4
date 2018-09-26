'use strict';

    function Phone(brand, price, color, batteryLife) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.batteryLife = batteryLife;
    }
    Phone.prototype.printInfo = function () {
        console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " and the battery is "+ this.batteryLife + ".");
    }

    var SamsungGalaxyS6 = new Phone("Samsung Galaxy S6", 2000, "black", "good");
    var iPhone6s = new Phone("iPhone 6s", 2500, "yellow", "poor");
    var OnePlusOne = new Phone("OnePlus One", 1800, "silver", "excellent");

    SamsungGalaxyS6.printInfo();
    iPhone6s.printInfo();
    OnePlusOne.printInfo();


