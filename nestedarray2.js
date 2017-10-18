var student =[
  ['Nama','Umur','Email','Nomor Telepon & Hp'],
  ['Doel',19,'doel@anaksekolah.an',[021345,08179829]],
  ['Atun',21,'Atun@tanjidor.com',[021911,08978]],
  ['Zaenab',24,'Zaenab@bukansarah.com',[0217788,08278]],
  ['Mandra',21,'Mandra@bibirsexy.com',[0219878,088278]],
]


function convertData(arr){
let tampung =[]

// console.log(student[0].length)
for(let i=1;i<arr[0].length;i++){
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
