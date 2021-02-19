function AKAfibonacci(signature, index) {
    arr = [];

    arr[0] = signature[0];
    arr[1] = signature[1];
    arr[2] = signature[2];
    for (let i = 3; i <= index; i++) {
        arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
        //console.log(arr[i]);
    }
    console.log(arr[index - 1]);
}
AKAfibonacci([0,0,1],8);