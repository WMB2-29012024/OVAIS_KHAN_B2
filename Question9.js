// Branch Name: B2_W4_D3

//  Question 9: Write a for-loop, and log the current and its immediate previous element.

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    

for (let i = 0; i < numArr.length - 1; i++) {
    let newArr = numArr[i];
    let nextArr = numArr[i -1];
  console.log(newArr,nextArr);
  }