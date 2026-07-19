const role = "admin";

// if (role === "admin") {
//     console.log("User is an admin.");
// } else {
//     console.log("Unknown role.");
// }
const userRole = (role === "admin") ? "User is an admin." : "Unknown role.";
console.log(userRole);

//nullish coalescing operator(only work for null and undefined)
const defaultValue = null;
const value = defaultValue ?? "Default Value";
console.log(value);

//test
const testValue = null;
const ternaryTest = testValue ? testValue : "Default Value";
const nullishTest = testValue ?? "Default Value";
console.log(ternaryTest);
console.log(nullishTest);

//optinal chaining operator
type User = {
    name: string;
    age: number;
    address?: {
        street: string;
        city?: string;
        division: string;
    };
};
const user = {
    name: "Azizul Islam Milton",
    age: 25,
    address: {
        street: "123 Main St",
        // city: "Dhaka",
        division: "Dhaka"
    }
};

const userCity = user?.address?.city;
console.log(userCity);