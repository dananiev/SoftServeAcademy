let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
let product = 1;

for (i = 0; i < array.length; i += 1) {
    sum += array[i];
    product *= array[i];
}

console.log(sum);
console.log(product);