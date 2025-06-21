function outerFunction() {
  let message = "Hello from closure!";

  function innerFunction() {
    console.log(message); 
  }

  return innerFunction; 
}


const closureFunc = outerFunction();

// Call the stored inner function
closureFunc(); 
