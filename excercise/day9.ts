/* 
    You have implemented the BankQueue class to manage customer queues in a bank. In this scenario, 
    you can perform operations such as adding customers to the queue, calling the next customer, and 
    counting the number of customers in the queue.

   # constructor:
   - this.queue

   # method : 
   - enqueue : menambahkan value baru dalam antrian
   - dequeue : menghilangkan value paling depan dalam antrian
   - size : melihat jumlah antrian saat ini
*/
class BankQueue {
  seat = [];
  usemax: boolean = false;
  maxseat: number;
  constructor( maximum?: number | null,...firstPerson: any | null) {
    this.usemax = maximum != null;
    if (this.usemax) this.maxseat = maximum;
    for (const element of firstPerson) {
      this.enqueue(element)
    }
  }

  private Bangque() {
    if (this.seat.length >= this.maxseat) return "full";
    if (this.seat.length <= 0) return "empty";
    return "still ";
  }
  enqueue(passenger) {
    return this.Bangque() !== "full" ? this.seat.push(passenger) : "full";
  }

  dequeue() {
    return this.Bangque() !== "empty" ? this.seat.shift() : "Already Empty";
  }
  size() {
    return this.seat.length;
  }
}

const studio = new BankQueue(10,"a","b","c");
console.log(studio.enqueue("amir"));
console.log(studio.enqueue("udin"));
console.log(studio.enqueue("samsudin"));
console.log(studio.size());
console.log(studio.dequeue());
console.log(studio.dequeue());
console.log(studio.dequeue());
console.log(studio.dequeue());
console.log(studio.size());

/* 
    You are given a JavaScript class called Train that simulates a train's passenger management system. 
    The Train class has the following methods and properties:

    - constructor(): Initializes the Train with an initial passenger, "masinis," and a maximum 
    capacity of 10 passengers.
    - isFull(): Checks if the train is at full capacity. It returns true if the train is full 
    and false otherwise.
    - isEmpty(): Checks if the train has no passengers except "masinis." It returns true if the 
    train is empty and false otherwise.
    - showPassenger(): Returns an object that contains the list of passengers on the train and 
    the remaining available seats.
    - passengerIn(name): Adds a passenger with the given name to the train. It returns "add passenger 
    success" if the passenger is successfully added, "train full" if the train is at full capacity, 
    and "passenger already exists" if the passenger is already on the train.
    - passengerOut(name): Removes a passenger with the given name from the train. It returns 
    "remove passenger success" if the passenger is successfully removed, "cannot remove masinis" 
    if an attempt is made to remove the "masinis," "train empty" if the train is already empty, and 
    "passenger not found" if the passenger with the given name is not found on the train.
*/

class Train {
  seat = new Map();
  maxseat = 10;
  currentpass = 0;
  constructor(
    masinis?: any | null,
    maxSize?: number | null,
    initialpas?: string[] | null
  ) {
    this.maxseat = maxSize != null ? maxSize : this.maxseat;
    if (masinis != null) this.seat.set(masinis, "Masinis");
  }

  private isFull() {
    return this.maxseat - this.currentpass > 1;
  }
  private isEmpty() {
    return this.currentpass <= 0;
  }

  passengerIn(passenger) {
    if (this.isFull()) {
      if (this.seat.has(passenger)) return "passenger already exists";
      this.seat.set(passenger, "passenger");
      this.currentpass++;
      return "add passenger success";
    } else {
      return "train full";
    }
  }

  passengerOut(name) {
    if (this.isEmpty()) {
      return "train empty";
    } else {
      if (this.seat.has(name) === false) return "passenger not found";
      if (this.seat.get(name) === "Masinis") return "cannot remove masinis";
      this.seat.delete(name);
      this.currentpass--;
      return "remove passenger success";
    }
  }
}

const setiabudi = new Train("supri", 3);

console.log(setiabudi.passengerIn("supri"));
console.log(setiabudi.passengerIn("amir"));
console.log(setiabudi.passengerOut("supri"));
console.log(setiabudi.passengerIn("nurhadi"));
