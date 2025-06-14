async function fetchUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    console.log("User data:", data);
  } catch (error) {
    console.error("Error fetching:", error);
  }
}

fetchUser();
