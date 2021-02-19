function toWeirdCase(str) {
  
    // s= str.replace(/  +/g, ' ');
    return str.split(' ').map(word => {
       return word.split('').map((v, i) =>
         i % 2 == 0 ? v.toUpperCase() : v.toLowerCase()).join('');
    })
  
}
console.log(toWeirdCase('he wo how ya dg').join(' '));