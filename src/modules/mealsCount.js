const mealsCount = (arrMeals) => {
  let result = 0;
  if (arrMeals.length === undefined) {
    result = 0;
  } else {
    result = arrMeals.length;
  }
  return result;
};

module.exports = mealsCount;