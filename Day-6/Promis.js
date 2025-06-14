function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Example usage:
wait(2000).then(() => console.log("Waited 2 seconds"));
