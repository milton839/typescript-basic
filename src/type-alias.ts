
//type alias
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

const user: User = {
    name: "Azizul Islam Milton",
    age: 25,
    isAdmin: true,
    email: "azizul.islam.milton@example.com",
    address: {
        street: "123 Main St",
        city: "Dhaka",
        division: "Dhaka Division"
    }
};  
type Result = {
    subject: string;
    marks: number;
}[];
type Student = {
    name: string;
    age: number;
    isAdmin: boolean;
    email: string;
    address: Address;
    result: Result
};

const student: Student = {
    name: "Azizul Islam Milton",
    age: 25,
    isAdmin: true,
    email: "azizul.islam.milton@example.com",
    address: {
        street: "123 Main St",
        city: "Dhaka",
        division: "Dhaka Division"
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
console.log(student)

