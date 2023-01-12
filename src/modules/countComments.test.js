const countComments = require('./countComments.js');

test('Checks whether correct number of comments are counted', () => {
	let arr = ["comm1", "comm2", "comm3"];

	expect(countComments(arr)).toBe(3);
});