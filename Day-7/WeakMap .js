const privateData = new WeakMap();

class Person {
  constructor(name, age) {
    privateData.set(this, { age });
    this.name = name;
  }

  getAge() {
    return privateData.get(this).age;
  }
}

const p = new Person("Alice", 30);
console.log(p.name);      // Alice
console.log(p.getAge());  // 30
console.log(p.age);       // undefined
