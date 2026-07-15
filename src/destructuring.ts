const student = {
    name: {
        firstname: "Azizul",
        middlename: "Islam",
        lastname: "Milton"
    },
    age: 25,
    profession: "Web Developer",
};

const { profession: myProfession, name: { lastname:mylastname } } = student;
const { lastname } = student.name; // 2 vabei kora jai
console.log(myProfession, lastname)