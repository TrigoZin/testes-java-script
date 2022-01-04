const args = [5, 1, 22, 25, 6, -1, 8, 10];
const args2 = [1, 6, -1, 10];
console.log(isSubsequent(args, args2));

function isSubsequent(args, args2) {
  const newArray = [];

  args.forEach(elementArgs1 => {
    args2.forEach(elementArgs2 => {
      if (elementArgs1 === elementArgs2)
        newArray.push(elementArgs1);
      return
    })
  });

  return compareTwoArrays(newArray, args2);
}

function compareTwoArrays(args1, args2) {
  var i = args1.length;
  while (i--) {
    if (args1[i] !== args2[i]) return false;
  }

  return true
}