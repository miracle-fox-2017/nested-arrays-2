function nestedArray(string) {


    let abc = string.split(',');
    let hasil = [];
    for (let i = 0; i < abc.length; i++) {
        hasil.push(abc[i].split(""));
    }
    return hasil
}
console.log(nestedArray('ida,bagus,angga'))