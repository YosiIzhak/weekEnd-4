function sumLow(arr){
    arr.sort((a, b) => a - b);
    console.log(arr[0] + arr[1]);
}
sumLow([19, 5, 42, 2, 77]);