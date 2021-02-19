function fibonacci(index) {
    arr = [];
    arr[0] = 1; arr[1] = 1;
    for (let i = 2; i <= index; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
        //console.log(arr[i]);
    }
    console.log(arr[index-1]);
}
fibonacci(5);