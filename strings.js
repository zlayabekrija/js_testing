const capitalize = (string) => {
  let arr = string.split('');
  arr[0] = arr[0].toUpperCase();
  return arr.join('');
};
const reverseString = (string) => {
  let arr = string.split('');
  arr = arr.reverse();
  return arr.join('');
};
export {capitalize, reverseString}