describe('Bubble Sort', function () {


  beforeEach(function () {
    spyOn(window, 'swap').and.callThrough();
  })

  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles an array with one item', function () {
    expect(bubbleSort([1])).toEqual([1]);
  });
  it('handles an array with multiple items', function () {
    expect(bubbleSort([3, 2, 1, 5])).toEqual([1, 2, 3, 5]);
  });
  it('swap callback is only called n times', function () {
    bubbleSort([3, 2, 1, 5]);
    expect(window.swap.calls.count()).toEqual(3);
  });
});

