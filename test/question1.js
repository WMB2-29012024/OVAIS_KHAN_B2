// Input: nums = [3,2,2,3], val = 3

const nums = [3, 2, 2, 3];
const val = 3;
const newArray = [];

const matchNum = () => {

  for (let i = 0; i < nums.length; i++) {
   
    if (nums[i] !== val) {
        newArray.push(nums[i]);
    }else(
     newArray.push("_")
    )
  }
  console.log(newArray)
};

matchNum();
