function getCentury(year) {
    let Century = 0;
    if (year % 100 == 0) {
        Century = (year / 100);
    }
    else {
        Century = (Math.floor(year/100));
    }
    console.log(Century);
}
getCentury(1705);
getCentury(1700);
getCentury(-117);
