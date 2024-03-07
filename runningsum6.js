const nums=[[1,2,3],[4,5,6],[7,8,9]]

sum =0;
for(let i=0; i<nums.length; i++){
      sum +=  nums[i][i];
      sum += nums[i][nums.length-1-i]
}
if (nums.length %2 === 0){
    return sum;
}
else{
 const middle = Math.floor(nums.length/2)
 sum -= nums[middle][middle]
}
