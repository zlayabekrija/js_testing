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

export {arrAnalysis}
