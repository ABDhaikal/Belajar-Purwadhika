// linearSearch

function linearSearch<T>(arr: T[], target: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index if the target is found
    }
  }
  return -1; // Return -1 if the target is not found
}

// Example usage:
const numbers = [10, 20, 30, 40, 50];
const targetNumber = 30;
const index = linearSearch(numbers, targetNumber);

console.log(`Target number ${targetNumber} found at index: ${index}`);

//Binary search

function binarySearch<T>(arr: T[], target: T): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Return the index if the target is found
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  return -1; // Return -1 if the target is not found
}

// Example usage:
const sortedNumbers = [10, 20, 30, 40, 50];
const targetNumber2 = 30;
const index2 = binarySearch(sortedNumbers, targetNumber);

console.log(`Target number ${targetNumber2} found at index: ${index2}`);
