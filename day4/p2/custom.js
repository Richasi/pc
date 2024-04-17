function customMap(arr, func) {
    const mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(func(arr[i]));
    }
    return mappedArray;
}

// Test the custom map function
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = customMap(numbers, x => x * x);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
