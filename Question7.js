// Branch Name: B2_W4_D3

//  Question 7: Write a for-loop to log every 4th element, starting from last index

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    

for (let i= numArr.length -1; i> 0 ; i-=4){
     console.log(numArr[i])
}