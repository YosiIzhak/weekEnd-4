function findUniq(arr){
    arr.sort((a, b) => a - b);
    if (arr[0] == arr[1]){
        console.log(arr[arr.length-1]);
    }
    else{
        console.log(arr[0]);
    }
}
findUniq([ 0, 0, 0.55, 0, 0 ]);
findUniq([ 1, 1, 1, 2, 1, 1 ]);