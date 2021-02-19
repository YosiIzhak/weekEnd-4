function accum(str) {
    var res = [];
    let letters = str.split('');
    let s = letters.map((v, i) =>
        v.repeat(i + 1));
      
        for (let i = 0; i < s.length; i++) {
        s[i] = s[i].charAt(0).toUpperCase() + s[i].substring(1);
        
       // console.log(s[i]);
    }
   return s.join('-');
}
console.log(accum('avcdf'));
