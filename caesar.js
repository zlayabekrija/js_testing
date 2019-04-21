const Caesar = (str, key) => {

  let encryptString = [];
  let decryptString = [];

  const encryptStr = () => {
    let a = str.split('');
    a.forEach((arrItem) => {
      if (arrItem.charCodeAt() > 96 && arrItem.charCodeAt() < 123){
        encryptString.push(String.fromCharCode(arrItem.charCodeAt() + key > 122 ? arrItem.charCodeAt() - 26 + key : arrItem.charCodeAt() + key));
      } else if (arrItem.charCodeAt() > 64 && arrItem.charCodeAt() < 91){
        encryptString.push(String.fromCharCode(arrItem.charCodeAt() + key > 90 ? arrItem.charCodeAt() - 26 + key : arrItem.charCodeAt() + key));
      } else {
        encryptString.push(arrItem);
      }
    });
    return encryptString.join('');
  };

  const decryptStr = () => {
    let a = str.split('');

    a.forEach((arrItem) => {
      if (arrItem.charCodeAt() > 96 && arrItem.charCodeAt() < 123){
        decryptString.push(String.fromCharCode(arrItem.charCodeAt() - key < 97 ? arrItem.charCodeAt() + 26 - key : arrItem.charCodeAt() - key));
      } else if (arrItem.charCodeAt() > 64 && arrItem.charCodeAt() < 91){
        decryptString.push(String.fromCharCode(arrItem.charCodeAt() - key < 65 ? arrItem.charCodeAt() + 26 - key : arrItem.charCodeAt() - key));
      } else {
        decryptString.push(arrItem);
      }
    });
    return decryptString.join('');
  };
  return {encryptStr, decryptStr}
};

export {Caesar};