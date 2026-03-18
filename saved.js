const container = document.getElementById("savedContainer");

// Get data from localStorage
let saved = localStorage.getItem("savedDesserts");

// Convert or empty array
saved = saved ? JSON.parse(saved) : [];

// Empty state
if (saved.length === 0) {
  container.innerHTML = "<p>No saved items yet.</p>";
} else {
  saved.forEach((item) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${item.name}</h3>
      <img src="${item.image}" width="150">
      <p>${item.category}</p>
    `;

    container.appendChild(div);
  });
}
