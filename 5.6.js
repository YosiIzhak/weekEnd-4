function maskify(str){
      if (str.length <= 4) {
        return str;
      } else {
        var masked =
          str.substring(0, str.length - 4).replace(/[a-z\d]/gi, "#") +
          str.substring(str.length - 4, str.length);
        return masked;
      }
    
    

}
console.log(maskify("4556aaaaa607935616")) ;