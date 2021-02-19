function shortestWord(str) {

    let words = str.split(' ').map(a => a.length);
    let max = Math.max(...words);
    return max;
}
console.log(shortestWord('aa bbb cccc dddddddd'));

