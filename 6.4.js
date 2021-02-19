function isIsogram(str) {
    let str2 =  str.toLowerCase();
    return str2.split('').every((c, i) => str2.indexOf(c) == i);
}
//let isIsogram = (str) => str.toLowerCase().split("").every((c, i) => str.indexOf(c) == i);
console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('Ava'));
