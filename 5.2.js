function repeat_str(src, times) {
    arr = [];
    for (let i = 0; i < times; i++) {
        arr.push(src);
    }
let res =arr.join('');
console.log(res);
}
repeat_str('yosi', 7);