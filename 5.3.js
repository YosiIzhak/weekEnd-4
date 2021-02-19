function toCamelCase(str) {
     arr = str.split(/[^A-Za-z]/g).map(word => word.charAt(0)
     .toUpperCase() + word.slice(1)).join(' ');

    console.log(arr);
}
toCamelCase('aa_bb_cccc');