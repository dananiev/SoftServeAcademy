function sumOfTheSeries(number) {
    let sum = 0;
    let num = 1;

    for (i = 1; i <= number; i += 1) {
        sum = sum + num;
        num = (num * 10) + 1;
    }

    return sum;
}

let number = 5;
console.log(sumOfTheSeries(number));