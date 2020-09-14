class User {
  constructor(name, age, followers) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
  }
}
console.log(typeof User);
const mango = new User("Mango", 2, 20);
console.log(mango.getInfo());
//
// 'function'
console.log(typeof mango.getInfo);
