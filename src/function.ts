function addNormalWay(num1: number, num2: number): number {
    return num1 + num2;
}

const sum = addNormalWay(5, 10);
console.log("Sum: ", sum);

const addArrowWay = (num1: number, num2: number): number => {
    return num1 + num2;
}

const sumArrow = addArrowWay(15, 20);
console.log("Sum Arrow: ", sumArrow);

const goribManus = {
    name: "Azizul Islam Milton",
    age: 25,
    currentBalance: 50000,
    addNewBalance(newBalance: number): number {
        return this.currentBalance += newBalance;
    }
}

goribManus.addNewBalance(10000);
console.log("New Balance: ", goribManus.currentBalance);

const numberArray: number[] = [1, 2, 3, 4, 5];

const squareNumbers = numberArray.map((element: number): number => element * element)
console.log(squareNumbers)