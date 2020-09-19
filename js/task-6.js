const getUserNames = (array) => array.map(({ name }) => name);

console.log(getUserNames(users));

const getUsersWithEyeColor = (array, color) =>
  array.filter(({ eyeColor }) => eyeColor === color);
console.log(getUsersWithEyeColor(users, "blue"));

const getUsersWithGender = (array, gender) =>
  array.filter((array) => array.gender === gender).map(({ name }) => name);
console.log(getUsersWithGender(users, "male"));

const getInactiveUsers = (array) =>
  array.filter(({ isActive }) => isActive === !true);
console.log(getInactiveUsers(users));

const getUserWithEmail = (array, mail) =>
  array.find(({ email }) => email === mail);
console.log(getUserWithEmail(users, "rossvazquez@xinware.com"));

const getUsersWithAge = (array, min, max) =>
  array
    .filter(({ age }) => (age = min <= age && age <= max))
    .map(({ name, email }) => ({ ["name"]: name, ["email"]: email }));

console.log(getUsersWithAge(users, 20, 30));

const calculateTotalBalance = (array) =>
  array.reduce((acc, { balance }) => acc + balance, 0);
console.log(calculateTotalBalance(users));

const getUsersWithFriend = (array, friendName) =>
  array
    .filter(({ friends }) => friends.includes(friendName))
    .map(({ name }) => name);
console.log(getUsersWithFriend(users, "Briana Decker"));
//
// [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry"));

const getNamesSortedByFriendsCount = (array) =>
  (array = [...array]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(({ name }) => name));
console.log(getNamesSortedByFriendsCount(users));

const getSortedUniqueSkills = (array) =>
  array
    .reduce((acc, item) => [...acc, ...item.skills], [])
    .filter((current, index, arr) => arr.indexOf(current) === index)
    .sort();
console.log(getSortedUniqueSkills(users));
