function populationCalc(p0, perc, inhab, endPop) {
   let t = 1, newPop = [];
   newPop.fill(0, 0, 15);
   newPop[0] = p0;
    while (newPop[t-1] <= endPop) {
        newPop[t] = newPop[t-1] + newPop[t-1]*perc*0.01 + inhab;
        console.log(newPop[t]);
        t++;
        
    }

}
populationCalc(1000,2, 50, 1200);
//populationCalc(1500000, 2.5, 10000, 2000000);
//populationCalc(1500, 5, 100, 5000);
