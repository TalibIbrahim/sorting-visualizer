export const BubbleSort = async (
  array,
  setArray,
  setComparisonIndices,
  setIsSorted,
  delayInputRef
) => {
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // set the comparison indices, so we can change their color.
      setComparisonIndices([j, j + 1]);

      // Allow the UI to update by creating a delay

      const delay = parseInt(delayInputRef.current.value) || 0;

      await new Promise((resolve) => setTimeout(resolve, delay));

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setArray([...arr]);
      }
      setComparisonIndices([]);
    }
  }
  setArray(arr);
  setIsSorted(true);
};
