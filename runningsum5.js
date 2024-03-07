const nums = [[5,2,3],[0,6,7]];
let maxsum=0;
for(let i=0; i<nums.length; i+=1){

    let sum=0;
    for( let j=0; j<nums[i].length; j+=1){
        sum += nums[i][j];
        }
    if(maxsum < sum){
        maxsum = sum;
    }
}

