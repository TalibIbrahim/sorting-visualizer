import React from "react";
import { useState, useEffect, useCallback } from "react";

import ArrayBar from "./ArrayBar";
import "./ArrayBar.css";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const generateArray = useCallback(() => {
    const array = [];
    for (let i = 0; i < 200; i++) {
      array.push(randomIntFromInterval(5, 750));
    }
    setArray(array);
  }, []);

  useEffect(() => {
    generateArray();
  }, [generateArray]);

  const JavaScriptSort = () => {
    const jsSortedArray = array.slice().sort((a, b) => a - b);
    setArray(jsSortedArray);
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
      </div>
      <div className="array-container pb-10">
        {array.map((value, index) => (
          <ArrayBar key={index} value={value} />
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
