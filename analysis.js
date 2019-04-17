import {returnStatement} from "@babel/types";

const arrAnalysis = (arr) => {
  const avg = () => {
    let avrg = arr.reduce((a, b) => {
      return a + b;
    });
    avrg = avrg / arr.length;
    return avrg;
  };

  const minimum = () => Math.min(...arr);

  const maximum = () => Math.max(...arr);

  const len = () => arr.length;

  return {avg, minimum, maximum, len};
};

arrAnalysis([1, 2, 3, 4, 5, 6]);

export {arrAnalysis}