function myFilter(arr) {
    myArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            myArr.push(arr[i]);
        }
    }
    return myArr;
}
console.log(myFilter([4, 5, 1, 7, 8, 9, 2]));
//----------------
function myForEach(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    return;
}
console.log(myForEach([1, 1, 2, 3, 4]));
//==============
function myMap(arr) {
    myArr = [];
    for (let i = 0; i < arr.length; i++) {
        myArr[i] = arr[i] * 2;
    }
    return myArr;
}
console.log(myMap([4, 5, 1, 7, 8, 9, 2]));

