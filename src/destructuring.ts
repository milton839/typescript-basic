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

//array destructuring
const friends = ["Jhankar", "Rakib", "Sakib", "Rasel", "Shuvo"];
// const [firstFriend, secondFriend, ...restFriends] = friends;

const [, secondFriend] = friends; // 2nd friend er jonno comma use kora hoyeche
console.log(secondFriend);

const [, , , fourthFriend] = friends; // 4th friend er jonno 3 comma use kora hoyeche
console.log(fourthFriend);