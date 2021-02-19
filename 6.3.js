function longest(str1, str2) {
    var res = str1.concat(str2).split('');
    var x = res.sort().filter(function(item, pos, arr) {
        return !pos || item != arr[pos - 1];
    });
return x.join(''); 
}
console.log(longest('xyaabbbccccdefww','xxxxyyyyabklmopq'));