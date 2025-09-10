async function loadRecipes() {
  try {
    const res = await fetch("https://dummyjson.com/recipes?limit=30&skip=0");
    const data = await res.json();
    const container = document.getElementById("recipes");

    data.recipes.forEach(r => {
      const div = document.createElement("div");
      div.className = "recipe";
      div.innerHTML = `
        <img src="${r.image}" alt="${r.name}">
        <h3>${r.name}</h3>
        <p><b>Cuisine:</b> ${r.cuisine}</p>
        <p><b>Calories:</b> ${r.caloriesPerServing}</p>
      `;
      container.appendChild(div);
    });
  } catch (err) {
    console.error("Error fetching recipes:", err);
  }
}

loadRecipes();
