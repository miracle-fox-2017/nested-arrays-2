function createNestedArr(jumlahRow, jumlahCol) {

     var alphabet = 'abcdefghijklmnopqrstuvwxyz';
     var randomString = '';
     var tampung = [];var hasil = [];

     for(let i = 0; i < jumlahRow; i++){
      tampung.push([])
       for(let j = 0; j < jumlahCol; j++){
        tampung[i].push(alphabet[Math.floor(Math.random() * alphabet.length)])
       }

     }
    return tampung
}
console.log(createNestedArr(5,3))
