const findLargeNumber = () => {
  const num = [10, 5, 20, 8, 15];

  let larNum = num[0];

  console.log(larNum);

  for (let i = 1; i < num.length; i++)
    if (num[i] > larNum) {
      larNum = num[i];

    console.log(larNum);
    }
};
findLargeNumber();
