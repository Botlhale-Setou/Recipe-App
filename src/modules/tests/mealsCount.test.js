const mealsCount = require('../mealsCount.js');

test('Checks whether correct count of meals is calculated', () => {
	const mockData = [
		{
			strMeal: 'Baked salmon with fennel & tomatoes',
			strMealThumb: 'https://xyz.xyz',
			idMeal: '52959',
		},
		{
			strMeal: 'Baked salmon with fennel & tomatoes',
			strMealThumb: 'https://xyz.xyz',
			idMeal: '52960',
		},
		{
			strMeal: 'Baked salmon with fennel & tomatoes',
			strMealThumb: 'https://xyz.xyz',
			idMeal: '52961',
		},
		{
			strMeal: 'Baked salmon with fennel & tomatoes',
			strMealThumb: 'https://xyz.xyz',
			idMeal: '52962',
		},
		{
			strMeal: 'Baked salmon with fennel & tomatoes',
			strMealThumb: 'https://xyz.xyz',
			idMeal: '52963',
		},
	];

	expect(mealsCount(mockData)).toBe(5);
});