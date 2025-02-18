/*
STACK
*/
class Stack {
    constructor() {
        this.container = [];
        this.maxSize = 10;
    }
    isFull() {
        return this.container.length >= this.maxSize;
    }
    isEmpty() {
        return this.container.length == 0;
    }
    push(element) {
        return this.isFull() ? "this container full" : this.container.push(element);
    }
    showContainer() {
        return this.container;
    }
    pop() {
        return this.isEmpty() ? "this container Empty" : this.container.pop();
    }
}
const stack = new Stack();
console.log(stack.showContainer());
console.log(stack.push(1));
console.log(stack.push(4));
console.log(stack.push(1));
console.log(stack.push(1));
console.log(stack.push(1));
console.log(stack.push(1));
console.log(stack.push(1));
console.log(stack.push(1));
console.log(stack.push(1));
console.log(stack.push(1));
console.log(stack.push(1));
console.log(stack.showContainer());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
/*
Queue
FIFO = First in First Out
*/
class Queue {
    constructor() {
        this.container = [];
    }
    enqueue(element) {
        return this.container.push(element);
    }
    dequeue() {
        return this.container.shift();
    }
    showContainer() {
        return this.container;
    }
}
const queue = new Queue();
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
console.log(queue.enqueue(5));
console.log(queue.enqueue(6));
console.log(queue.enqueue(7));
console.log(queue.enqueue(8));
console.log(queue.enqueue(9));
console.log(queue.enqueue(10));
console.log(queue.showContainer());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
/*
SET= Only unqiue value
*/
const fruits = ["Banana", "apple", "manggo", "apple"];
const mySet = new Set(fruits);
console.log(mySet);
console.log(mySet.has("manggo"));
for (const value of mySet) {
    console.log(value);
}
console.log(Array.from(mySet));
/*
HASH TABLE
*/
const myMap = new Map();
function coba() {
}
console.log(myMap.set("name", "Jhon"));
console.log(myMap.set(123, 800));
console.log(myMap.set(coba, "ini adalaah fungsi"));
console.log(myMap.get(coba));
for (const [key, value] of myMap) {
    console.log(key);
    console.log(value);
}
console.log(myMap);
console.log(myMap.delete("as"));
console.log(myMap);
console.log(myMap.get("name"));
export {};
