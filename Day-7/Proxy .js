const validator = {
  set(obj, prop, value) {
    if (prop === "age" && typeof value !== "number") {
      throw new TypeError("Age must be a number");
    }
    obj[prop] = value;
    return true;
  }
};

const user = new Proxy({}, validator);

user.age = 25;     // OK
// user.age = "25";  // Throws TypeError
console.log(user.age); // 25
