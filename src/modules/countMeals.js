const mealsCount = (arr) => {
  let result = 0;
  if (arr.length === undefined) {
    result = 0;
  } else {
    result = arr.length;
  }
  return result;
};
const countMeals = async (url, term, element) => {
  const response = await fetch(`${url}${term}`);
  await response.json().then((food) => {
    const foods = food.meals;
    element.innerText = mealsCount(foods);
  });
};

export { countMeals };
