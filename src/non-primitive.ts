// array, object
const numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers: ", numbers);

const person: { name: string; age: number } = {
    name: "Azizul Islam Milton",
    age: 25,
};

console.log("Person: ", person);

const students: { name: string; age: number }[] = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 21 },
];

console.log("Students: ", students);

const bazarList: (string | number)[] = ["Rice", "Potato", "Onion", 5, 10, 15];
console.log("Bazar List: ", bazarList);

const employee: { name: string; age: number; salary: number }[] = [
    {
        name: "John Doe",
        age: 30,
        salary: 50000,
    }
];
console.log("Employee: ", employee);

//Tuple
const personTuple: [string, number] = ["Azizul Islam Milton", 25];
console.log("Person Tuple: ", personTuple);

const numberTuple: [number, number, number] = [1, 2, 3];
console.log("Number Tuple: ", numberTuple);

const mixedTuple: [string, number, boolean] = ["Azizul Islam Milton", 25, true];
console.log("Mixed Tuple: ", mixedTuple);

const studentTuple: [string, number, string][] = [
    ["Alice", 20, "A"],
    ["Bob", 22, "B"],
    ["Charlie", 21, "C"],
];
console.log("Student Tuple: ", studentTuple);

const nameTuple: [string, string] = ["Azizul Islam Milton", "Milton"];
console.log("Name Tuple: ", nameTuple);

// literal types
const userName: "Azizul Islam Milton" = "Azizul Islam Milton";
console.log("User Name: ", userName);

const userAge: 25 = 25;
console.log("User Age: ", userAge);

const isMarriedLiteral: true = true;
console.log("Is Married Literal: ", isMarriedLiteral);

const user: {
    organization: "Programming Hero",
    Ceo: string,
    coo: string
} = {
    organization: "Programming Hero",
    Ceo: "Jhankar Mahbub",
    coo: "Abdur Rakib"
}

// user.organization = "Programming Hero Course 2026"; // ayta assign korte dibena literal types e



console.log(user)


// Access Modifiers
const user1: {
    readonly organization: string,
    Ceo: string,
    coo: string
} = {
    organization: "Programming Hero",
    Ceo: "Jhankar Mahbub",
    coo: "Abdur Rakib"
}

// user1.organization = "Programming Hero Course 2026"; // ayta assign korte dibena karon readonly property

// optional type
const optionalUser: {
    name: string;
    age?: number; // optional property
} = {
    name: "Azizul Islam Milton",
    // age na dileo kaj korbe karon age optional property
};

console.log("Optional User: ", optionalUser);

// access modifiers
