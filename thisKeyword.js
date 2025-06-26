let student = {
  name: "Alice",
  age: 22,
  course: "Computer Science"
};


let jsonString = JSON.stringify(student);

console.log(jsonString)


//synchronous code execution
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");


console.log("Message 1")
const setime=setTimeout(()=>{
  console.log("Message after 2 second");
},2000)

console.log("Message 3")

let count = 0;

// Start the loading interval
let loadingInterval = setInterval(() => {
  console.log("Loading...");
  count++;

  if (count === 5) {
    clearInterval(loadingInterval); 
    console.log("Loaded successfully!");
  }
}, 1000); 
