function myTrim(str) {
    arr = [];
    arr = str.split('');
    let result = arr.slice(1, -1);
    let res = result.join('');
    console.log(res);
}
myTrim('abcdeg xyz');