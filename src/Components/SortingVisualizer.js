import React from "react";
import { useState, useEffect, useCallback } from "react";

import ArrayBar from "./ArrayBar";
import "./ArrayBar.css";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [comparisonIndices, setComparisonIndices] = useState([]);

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const generateArray = useCallback(() => {
    const array = [];
    for (let i = 0; i < 200; i++) {
      array.push(randomIntFromInterval(5, 750));
    }
    setArray(array);
    setComparisonIndices([]); // just for safety, empties the compared indices
  }, []);

  useEffect(() => {
    generateArray();
  }, [generateArray]);

  const JavaScriptSort = () => {
    const jsSortedArray = array.slice().sort((a, b) => a - b); //creates a copy of the array, sorts it and stores it in jsSortedArray which we then set as the new state
    setArray(jsSortedArray);
  };

  const BubbleSort = async () => {
    const arr = [...array];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        // set the comparison indices, so we can change their color.
        setComparisonIndices([j, j + 1]);

        // Allow the UI to update by creating a delay
        await new Promise((resolve) => setTimeout(resolve, 1));

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
        }
        setComparisonIndices([]);
      }
    }
    setArray(arr);
  };

  return (
    <div>
      <div className="flex justify-center items-center p-10">
        <button
          className="bg-sky-600 hover:bg-sky-700 text-white font-semibold transition ease-in-out p-4 rounded-lg mx-2"
          onClick={generateArray}
        >
          Generate New Array
        </button>

        <button
          className="bg-sky-600 hover:bg-sky-700 text-white font-semibold transition ease-in-out p-4 rounded-lg mx-2"
          onClick={JavaScriptSort}
        >
          JavaScript Sort
        </button>

        <button
          className="bg-sky-600 hover:bg-sky-700 text-white font-semibold transition ease-in-out p-4 rounded-lg mx-2"
          onClick={BubbleSort}
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
          />
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
