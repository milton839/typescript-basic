//union
type Role = "admin" | "user";

const userRole: Role = "admin"; // Valid

function checkUserRole(role: Role) {
    if (role === "admin") {
        console.log("User is an admin.");
    } else if (role === "user") {
        console.log("User is a regular user.");
    }
}

checkUserRole(userRole); // Output: User is an admin.

//intersection
type Address = {
    street: string;
    city: string;
    division: string;
};

type User = {
    name: string;
    age: number;
    isAdmin: boolean;
    email: string;
    address: Address;
};

type Result = {
    subject: string;
    marks: number;
}[];

type Student = User & {
    result: Result;
};

const student: Student = {
    name: "Azizul Islam Milton",
    age: 25,
    isAdmin: true,
    email: "azizul.islam.milton@example.com",
    address: {
        street: "123 Main St",
        city: "Dhaka",
        division: "Dhaka"
    },
    result: [
        {
            subject: "Math",
            marks: 85
        },
        {
            subject: "Science",
            marks: 90
        }
    ]
};