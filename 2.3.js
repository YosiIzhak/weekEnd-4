function findNextSquare(num) {
    if (Math.sqrt(num) % 1 != 0) {
        console.log(-1);
    }
    else {
        console.log(Math.pow((Math.sqrt(num) + 1), 2));

    }

}
findNextSquare(145);