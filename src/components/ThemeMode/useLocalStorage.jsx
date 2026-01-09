import React, { useEffect, useState } from "react";

const useLocalStorage = (key, defaultVal) => {
  const [val, setVal] = useState(() => {
    let curVal;
    try {
      curVal = JSON.parse(localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      console.log(e);
      curVal = defaultVal;
    }
    return curVal;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [key, val]);

  return [val, setVal];
};

export default useLocalStorage;
