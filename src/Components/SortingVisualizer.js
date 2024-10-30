import React from "react";
import { useState, useEffect, useCallback, useRef } from "react";

import ArrayBar from "./ArrayBar";
import "./ArrayBar.css";

//importing algorithms from the algorithms folder
import { BubbleSort } from "../Algorithms/BubbleSort";
import { JavaScriptSort } from "../Algorithms/JavascriptSort";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [comparisonIndices, setComparisonIndices] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [isSorting, setIsSorting] = useState(false);

  const sizeInputRef = useRef();
  const delayInputRef = useRef();

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const generateArray = useCallback(() => {
    const array = [];
    const size = parseInt(sizeInputRef.current.value) || 200;
    for (let i = 0; i < size; i++) {
      array.push(randomIntFromInterval(5, 750));
    }
    setArray(array);
    setIsSorted(false);
    setComparisonIndices([]); // just for safety, empties the compared indices
  }, []);

  useEffect(() => {
    generateArray();
  }, [generateArray]);

  const javaScriptSortHandler = () => {
    setIsSorting(true);
    JavaScriptSort(setArray, array, setIsSorted);
    setIsSorting(false);
  };

  const bubbleSortHandler = async () => {
    setIsSorting(true);

    await BubbleSort(
      array,
      setArray,
      setComparisonIndices,
      setIsSorted,
      delayInputRef
    );
    setIsSorting(false);
  };

  return (
    <div>
      <div className="flex justify-center items-center p-10">
        <button
          className="bg-sky-600 hover:bg-sky-700 text-white font-semibold transition ease-in-out p-4 rounded-lg mx-2"
          onClick={generateArray}
          disabled={isSorting}
        >
          Generate New Array
        </button>

        <div>
          <input
            type="number"
            className="p-2 mx-2"
            placeholder="Array Size"
            ref={sizeInputRef}
            disabled={isSorting}
          />
          <input
            type="number"
            className="p-2 mx-2"
            placeholder="Delay in ms"
            ref={delayInputRef}
          />
        </div>

        <button
          className="bg-sky-600 hover:bg-sky-700 text-white font-semibold transition ease-in-out p-4 rounded-lg mx-2"
          onClick={javaScriptSortHandler}
          disabled={isSorted || isSorting}
        >
          JavaScript Sort
        </button>

        <button
          className="bg-sky-600 hover:bg-sky-700 text-white font-semibold transition ease-in-out p-4 rounded-lg mx-2"
          onClick={bubbleSortHandler}
          disabled={isSorted || isSorting}
        >
          Bubble Sort
        </button>
      </div>
      <div className="array-container pb-10">
        {array.map((value, index) => (
          <ArrayBar
            key={index}
            value={value}
            color={comparisonIndices.includes(index) ? "red" : "blue"}
            isSorted={isSorted}
          />
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
