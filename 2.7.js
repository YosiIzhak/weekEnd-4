function basicMath(operation, value1, value2){
    switch(operation) {
        case '+':
          console.log(value1+value2);
          break;
        case '-':
            console.log(value1-value2);
          break; 
          case '*':
          console.log(value1*value2);
          break;
        case '/':
            console.log(value1/value2);
          break;
        default:
            console.log('not valid!');
      }
}
basicMath('+',5,4);
basicMath('-',5,4);
basicMath('*',5,4);
basicMath('/',5,4);