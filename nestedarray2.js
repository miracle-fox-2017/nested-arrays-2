var student =[
  ['Nama','Umur','Email','Nomor Telepon & Hp'],
  ['Doel',19,'doel@anaksekolah.an',[21345,9997778179829]],
  ['Atun',21,'Atun@tanjidor.com',[21911,775328978]],
  ['Zaenab',24,'Zaenab@bukansarah.com',[35217788,748278]],
  ['Mandra',21,'Mandra@bibirsexy.com',[56219878,97888278]],
]


function convertData(arr){
let tampung =[]

// console.log(student[0].length)
for(let i=1;i<arr.length;i++){
let obj={}
  obj[arr[0][0]]= arr[i][0]
  obj[arr[0][1]]= arr[i][1]
  obj[arr[0][2]]= arr[i][2]
  obj[arr[0][3]]= arr[i][3]
tampung.push(obj);
 }

console.log(tampung);
}

convertData(student);
// console.log(student[0][1])
// let obj={}
// obj[student[0][1]] = student[1][1]
// console.log(obj)
// = [student[i][0]
