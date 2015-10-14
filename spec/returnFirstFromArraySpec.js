describe('returnFirstFromArray', function(){
	var first = [];

	it('should return the first object in array', function(){
		expect(returnFirstFromArray([1,2,3])).toBe(1);
	});

	it('should return the first object in array', function(){
		expect(returnFirstFromArray(['a','b','c'])).toBe('a');
	});

	it('should return the first object in array', function(){
		expect(returnFirstFromArray([first,'a','b','c'])).toBe(first);
	});

	it('should return the first object in array', function(){
		expect(returnFirstFromArray([undefined,'a','b','c'])).toBe(undefined);
	});

	it('should return undefined for an empty array', function(){
		expect(returnFirstFromArray([])).toBe(undefined);
	});
});