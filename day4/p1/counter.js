function counter() {
    let count = 0;

    function increment() {
        count++;
        return count;
    }

    function decrement() {
        count--;
        return count;
    }

    function get_count() {
        return count;
    }

    return { increment, decrement, get_count };
}

// Test the counter
const { increment, decrement, get_count } = counter();

console.log("Initial count:", get_count());  // Output: 0

console.log("Incrementing...");
console.log("Count after increment:", increment());  // Output: 1
console.log("Count after increment:", increment());  // Output: 2

console.log("Decrementing...");
console.log("Count after decrement:", decrement());  // Output: 1

console.log("Final count:", get_count());  // Output: 1
