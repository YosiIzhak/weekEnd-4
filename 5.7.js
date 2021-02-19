function shortestWord(str) {

    let words = str.split(' ').map(a => a.length);
    let min = Math.min(...words);
    return min;
}
console.log(shortestWord('aa bbb cccc dddddddd'));

