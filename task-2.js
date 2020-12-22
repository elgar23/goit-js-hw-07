const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const foodIngredients = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  return item;
});
const list = document.querySelector('#ingredients');
list.append(...foodIngredients);
console.log(list);

/*const ulList = document.getElementById("ingredients");
const foodIngredients = ingredients.map((ingredient) => {
  const items = document.createElement("li");
  items.textContent = [ingredient];

  return ulList.append(items);
});

console.log(ulList);*/
