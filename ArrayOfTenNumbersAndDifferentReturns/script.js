// returns largest number in array
function largest(array) {
    let largestNumber = array[0];

    for (i = 1; i < array.length; i += 1) {
        if (array[i] > largestNumber) {
            largestNumber = array[i];
        }
    }

    return largestNumber;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(largest(array));


// returns smallest number in array
function smallest(array) {
    let smallestNumber = array[0];

    for (i = 1; i < array.length; i += 1) {
        if (array[i] < smallestNumber) {
            smallestNumber = array[i];
        }
    }

    return smallestNumber;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(smallest(array));


// returns sum of positive numbers
function sumOfPositiveNumbers(array) {
    let sum = 0;

    for (i = 0; i < array.length; i += 1) {
        if (array[i] > 0) {
            sum += array[i];
        }
    }

    return sum;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumOfPositiveNumbers(array));


// returns the product of negative numbers
function productOfNegativeNumbers() {
    let product = 1;

    for (i = 0; i < array.length; i += 1) {
        if (array[i] < 0) {
            product *= array[i]
        }
    }

    return product;
}

let array = [-1, -2, -3, -4, -5, 6, 7, 8, 9, 10];
console.log(productOfNegativeNumbers(array));


// returns the amount of negative and positive numbers
function amountOfNegativeAndPositiveNumbers(array) {
    let amountOfNegativeNumbers = 0;
    let amountOfPositiveNumbers = 0;

    for (i = 0; i <= array.length; i += 1) {
        if (array[i] > 0) {
            amountOfPositiveNumbers += 1;
        } else if (array[i] < 0) {
            amountOfNegativeNumbers += 1;
        } else {
            console.log('Zero is called origin')
        }
    }

    console.log('The amount of positive numbers are ' + amountOfPositiveNumbers + ' ' + 'and the amount of negative numbers are ' + amountOfNegativeNumbers);
}

let array = [-1, -2, -3, -4, 5, 6, 7, 8, 9, 10];
console.log(amountOfNegativeAndPositiveNumbers(array));

