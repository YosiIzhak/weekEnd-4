function toDec(arr){
    let bin = arr.join('');
    var num = parseInt(bin, 2);  
    console.log(num);
}
toDec([1, 1, 1, 1]);
toDec([1, 1, 0, 1, 1]);