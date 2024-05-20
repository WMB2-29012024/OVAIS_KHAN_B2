const CheckDifferentWord = () => {

  const sNum = "anagram";
  const tNum = "nagaram";

  let newArry = [];
  let nArray = [];

  if (sNum.length !== tNum.length) {

    for (let i = 0; i < sNum.length; i++) {
      newArry += sNum[i];
    }
    for (let j = 0; j < tNum.length; j++) {
      nArray += tNum[j];
    }
    if (newArry == nArray) {
      console.log(true);
    }else
    {console.log(false)};
  }else{console.log(false)}

};
CheckDifferentWord();
