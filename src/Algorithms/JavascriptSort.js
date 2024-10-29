export const JavaScriptSort = (setArray, array, setIsSorted) => {
  const jsSortedArray = array.slice().sort((a, b) => a - b); //creates a copy of the array, sorts it and stores it in jsSortedArray which we then set as the new state
  setArray(jsSortedArray);
  setIsSorted(true);
};
