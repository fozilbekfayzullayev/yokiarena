import { useEffect, useState } from "react";
const words = ["kino", "aktor", "aktrisa", "qo'shiq"];

export const useSlideWord = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setCurrentWord(words[index]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { currentWord };
};
