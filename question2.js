const nums = [1, 2, 3, 1];
const k = 3;

const checkNums = () => {
  let number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (number <= nums[i]) {
      number = nums[i];
    }
}
    if (number === k) {
      console.log("true");
    } else {
      console.log("false");
}return
};
checkNums()