var arr = "123 2132 332 412 25";
var myArr = arr.split(" ");
 
function checkCondition(myArr) {
    var count = 0;
    for (let i = 0; i < myArr.length; i++){
        if (myArr[i] <= 0) {
            return false;
        }
        count++;
    }
    if (count === 5) {
        return true;
    }
    return false;
}

function minMaxSum(myArr) {
    var sortedArr = myArr.sort();
    var minSum = 0;
    for (let i = 0; i < sortedArr.length - 1; i++){
        minSum += parseInt(sortedArr[i]);
    }

    var reverseSortedArr = sortedArr.reverse();
    var maxSum = 0;
    for (let i = 0; i < reverseSortedArr.length - 1; i++){
        maxSum += parseInt(reverseSortedArr[i]);
    }

    console.log(minSum + " " + maxSum);
}

if (checkCondition(myArr)) {
    minMaxSum(myArr);
}
else {
    console.log('Please input 5 positive number')
}