const friends = ["Jhankar", "Rakib", "Sakib", "Rasel", "Shuvo"];
const newFriends = ["Azizul", "Milton", "Rasel", "Shuvo"];

const allFriends = [...friends, ...newFriends];
console.log("All Friends: ", allFriends);

const [firstFriend, secondFriend, ...restFriends] = allFriends;
console.log("First Friend: ", firstFriend);
console.log("Second Friend: ", secondFriend);
console.log("Rest Friends: ", restFriends);

const student = {
  name: "Azizul Islam Milton",
  age: 25,
  profession: "Web Developer",
};

const updatedStudent = { ...student, profession: "Full Stack Web Developer" };
console.log("Updated Student: ", updatedStudent);

const allFriendsList = (...friends: string[]) => {
  friends.map((friend: string) => console.log(friend));
};

allFriendsList("Jhankar", "Rakib", "Sakib", "Rasel", "Shuvo", "Azizul", "Milton");