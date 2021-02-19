function Abb(str){
   let arr = str.split(/[' ']/g).map(word => word.charAt(0)
    .toUpperCase());
return (arr.join('.'));
}
console.log(Abb('yosi izhak'));