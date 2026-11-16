// This function fetches user data from a public API and displays it on the webpage. It handles loading states and errors gracefully.
async function fetchUsers() {
  const result = document.getElementById("result");
  result.innerHTML = "<p>Loading user data.....</p>";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch user data!!!");
    }
    const users = await response.json();
    result.innerHTML = "<h3>Users Details</h3>";
    users.forEach((user) => {
      result.innerHTML += `
            <div class = user>
                <strong>Name:</strong> ${user.name}<br>
                <strong>Email:</strong> ${user.email}<br>
                <strong>City:</strong> ${user.address.city}<br>
                <strong>Company:</strong> ${user.company.name}<br>
            </div>`;
    });
  } catch (error) {
    result.innerHTML = "<p style= 'color:red'>Error: " + error.message + "</p>";
  }
}
