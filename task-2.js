const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulList = document.getElementById("ingredients");
const foodIngredients = ingredients.map((ingredient) => {
  const items = document.createElement("li");
  items.textContent = ingredient;

  return ulList.append(items);
});

console.log(ulList);
