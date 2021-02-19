function countDuplicate(str) {
    let counts = {}, obj = {};
    let arr = [];
    arr = str.toLowerCase().split('');

    arr.forEach((i) => (counts[i] = (counts[i]) ? ++counts[i] : 1));
    for (x in counts) {
        if (counts[x] > 1) {
            obj[x] = counts[x];
        }
    }
    for (const property in obj) {
        console.log(`${property} occurs ${obj[property]} times`);
    }
}


countDuplicate('"Indivisibilities');