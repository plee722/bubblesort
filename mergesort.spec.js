describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
  });
  it('is able to split an odd array', function() {
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
  })
});


describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([5, 8], [2, 3, 10])).toEqual([2, 3, 5, 8, 10]);
    expect(merge([20, 30, 40], [5, 10, 15, 20, 25, 100])).toEqual([5, 10, 15, 20, 20, 25, 30, 40, 100]);
  });
});

describe('mergeSort function', function(){
  it('is able to merge sort an unsorted array', function() {
    expect(mergeSort([43, 27, 1, 32, 5, 10])).toEqual([1, 5, 10, 27, 32, 43]);
  });
});
