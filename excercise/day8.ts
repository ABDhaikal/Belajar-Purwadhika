/*
● Specifications :
    ○ Create a program to calculate total salary based on employee type
    ○ There are two types of employee : full-time & part-time
    ○ Salary for full-time employee :
        ■ IDR 100.000 / hour
        ■ IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
    ○ Salary for part-time employee :
        ■ IDR 50.000 / hour
        ■ IDR 30.000 / hour, if the number of working hours per day is more than 6 hours
● Requirements :
    ○ Create an Employee as a parent class
    ○ Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
        ■ Create a method in that class to add working hour per day
        ■ Create a method in that class to calculate total salary
    ○ Use inheritance concept
*/

class Employee {
  private salaryPerHour = 0;
  private overtimePerHour = 0;
  private totalSalary = 0;
  private workingTime = 0;
  private overtime = 0;
  private normalTime = 6;
  constructor(salary: number, ovSalary: number, norm?) {
    this.salaryPerHour = salary;
    this.overtimePerHour = ovSalary;
    this.normalTime = norm != null ? norm : this.normalTime;
  }
  public addWorkingHour(time: number) {
    if (time > 6) {
      this.workingTime += 6;
      this.overtime += time - 6;
    } else {
      this.workingTime += time;
    }
  }

  public calculateTotalSalary() {
    this.totalSalary =
      this.overtimePerHour * this.overtime +
      this.workingTime * this.salaryPerHour;

    let out_result = `Working Hour : ${this.workingTime} hour 
    Overtime Hour : ${this.overtime} hour 
    Total Salary  :Rp. ${this.totalSalary.toLocaleString("id-ID")},00`;
    return out_result;
  }
}

class FulltimeEmployee extends Employee {
  constructor() {
    super(100_000, 75_000);
  }
}

class ParttimeEmployee extends Employee {
  constructor() {
    super(50_000, 30_000);
  }
}

const Nurhadi = new ParttimeEmployee();
Nurhadi.addWorkingHour(7);

console.log(Nurhadi.calculateTotalSalary());

const Aldo = new FulltimeEmployee();
Aldo.addWorkingHour(7);
console.log(Aldo.calculateTotalSalary());

//Shooting game
class Player {
  private name = "";
  private health = 100;
  private power = 10;
  constructor(name: string) {
    this.name = name;
  }
  public damage(power: number) {
    this.health -= power;
  }
  public useItem(item:any) {
    this.health += item.health;
    this.power += item.power;
    console.log(this.name + ` had item to increase health ${item.health} and Power ${item.power}`);
  }
  public showStatus() {
    return `Player ${this.name} (Health => ${this.health}, Power => ${this.power})`;
  }

  get Power() {
    return this.power;
  }

  get Name() {
    return this.name;
  }
  get Health() {
    return this.health;
  }
}

class ShootingGame {
  player1: any;
  player2: any;

  constructor(Player1: Player, Player2: Player) {
    this.player1 = Player1;
    this.player2 = Player2;
  }

  getRandomItem() {
    let output = {};
    output["health"] = Math.random() > 0.5 ? 10:0;
    output["power"] = Math.random() > 0.5  ? 10:0;
    return output;
  }
  start() {
    console.log(`==== GAME START ====`);
    let turn: boolean = Math.random() > 0.5;
    while (this.player1.Health > 0 && this.player2.Health > 0) {
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());
      if (turn) {
        console.log(`====  PLAYER ${this.player1.Name} TURN ====`);

        this.player1.useItem(this.getRandomItem());
        this.player2.damage(this.player1.Power);
        turn = !turn;
      } else {
        console.log(`====  PLAYER ${this.player2.Name} TURN ====`);
        this.player2.useItem(this.getRandomItem());
        this.player1.damage(this.player1.Power);
        turn = !turn;
      }
    }
    console.log(this.player1.showStatus());
    console.log(this.player2.showStatus());
    if (this.player1.Health > 0) {
      console.log(this.player1.Name + " Is The WINNERR");
    } else {
      console.log(this.player2.Name + " Is The WINNERR");
    }
  }
}

let pemain1 = new Player("Nurhadi");
let pemain2 = new Player("Aldo");

const tembaktembakan = new ShootingGame(pemain1, pemain2);

tembaktembakan.start();
