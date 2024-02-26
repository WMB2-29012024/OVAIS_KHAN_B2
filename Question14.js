// Branch Name: B2_W4_D3

//  Question 14: There are 2 different arrays, write a for-loop, that should log elements at the same index in both the arrays.
// The loop should run till the longer array's length.

const numArr1 = [1, 2, 3, 4, 5]
const numArr2 = [6, 7, 8, 9, 10, 11, 12]    

for (let i =0; i < numArr2.length; i++ ){
    let newArr1= numArr1[i]
  let newArr2 = numArr2[i]

    console.log (newArr1,":",newArr2)
}