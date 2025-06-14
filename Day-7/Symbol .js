const secret = Symbol("secret");

const obj = {
  name: "Secret Box",
  [secret]: "Hidden Value"
};

console.log(obj.name);         // Secret Box
console.log(obj.secret);       // undefined
console.log(obj[secret]);      // Hidden Value
console.log(Object.keys(obj)); // ["name"]
