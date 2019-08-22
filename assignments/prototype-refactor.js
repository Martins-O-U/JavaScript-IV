// Prototype Refactor

// 1. Copy and paste your code or the solution from yesterday

class Person {
    constructor(Name, Age) {
      this.name = Name;
      this.age = Age;
      this.eatEdibles = true;
      this.stomach = [];
      this.poop = true;
    }
    greet() {
        return `Hello, my name is ${this.name} and i am ${this.age} years old.`
    }
    pooping() {
        if(this.poop === true) {
            return this.stomach =[]
          }    
        }
    eats(meals) {
        if(this.eatEdibles === true){
            return this.stomach.push(meals);
          }else{
            return `Can't eat that, please.`
          };
        };
    }

  const Humn = new Person("James", 40)
  console.log("Name: "+ Humn.name);
  console.log("Age: " + Humn.age);
  console.log(Humn.greet());
  console.log(Humn.eats());
  console.log(Humn.pooping());


  class Baby extends Person {
    constructor(Name, Age, playWith) {
      super(Name, Age);
      this.favoriteToy = playWith;
    }
    playWithToy() {
        return `I love playing with my ${this.favoriteToy}!`;
      };
  }
const baby = new Baby("Cindy", 5, "Barbie")
console.log(baby.playWithToy());


class Car {
    constructor(Model_Name, Make){
        this.model = Model_Name;
        this.make = Make;
        this.driveDistance = true;
        this.crashAble = true;
        this.canRepair = true;
        this.odometer = 0;

    }
    drvienFar(){
        if(this.driveDistance === true){
            return this.odometer = this.odometer + 5;
        }else{
             return  `I crashed at ${this.odometer} miles!.`
        }
    }
    drivenAfterCrash(){
        if(this.crashAble === true){
          return  this.driveDistance = false;
        }
    }
    nowRepaired(){
        if(this.canRepair === true){
          this.driveDistance = true;
          return "Repairs done,fit for work again!";
        }
    }
}

Vehicle = new Car ("Toyota", "Corola",)
console.log("Model_Name: "+ Vehicle.model + ", Make: "+ Vehicle.make)
console.log(Vehicle.drvienFar());
console.log(Vehicle.drvienFar());
console.log(Vehicle.drvienFar());
console.log(Vehicle.drivenAfterCrash());
console.log(Vehicle.drvienFar());
console.log(Vehicle.drvienFar());
console.log(Vehicle.nowRepaired());
console.log(Vehicle.drvienFar());
console.log(Vehicle.drvienFar());


class Estate {
    constructor(House_Type, House_Colour, Block){
        this.type = House_Type;
        this.color = House_Colour;
        this.block = Block;
        this.isOccupied = false;
    }
    available(){
        if(this.isOccupied === false){
          return `${this.type} of block ${this.block} "To Let"`
        }else{
          return "House not available"
        }
    }
}
const Home = new Estate("Duplex", "skyBlue", 25);
const House = new Estate("Bongalo", "Briliant White", 30);
const Place = new Estate("Mini-Flat", "Lemon", 15);

console.log("House_type: "+ Home.type);
console.log("House_colour: "+ Home.color);
console.log(Place.available());


class LivingThings {
    constructor(Name, Breath,Reproduce,Excrete){
        this.name = Name;
        this.breath = Breath;
        this.repro = Reproduce;
        this.excrete = Excrete;
    }
}

class Dog extends LivingThings {
    constructor(Name,Breath, Reproduce, Excrete,){
        super(Name,Breath, Reproduce, Excrete,);
    }
    bark(){
      return "Wooooaaaf! Wooaff!!"
    }
}
const dog = new Dog("Jark")
console.log(`${dog.name} barks ${dog.bark()}`)


// 2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

