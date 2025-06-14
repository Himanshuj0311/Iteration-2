function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Example usage:
function logMessage(msg) {
  console.log("Debounced:", msg);
}

const debouncedLog = debounce(logMessage, 1000);

debouncedLog("Hello");   // Will only log if no other call within 1s
