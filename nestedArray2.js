// var roster = [
//   ['Number','Name','Position','Positiopergame'],
//   [12,'Joe s','center',[14,32,7,0,23]],
//   [9,'Ms. Bucket','center',[19,0,11,22,0]]
// ]
// var roster2 = roster.shift()
//
// let temp;
// let arr = []
// function convert_roster_format (roster){
//   for (let i = 0;i<roster.length;i++){
// let obj = {}
//     for(let j = 0;j<roster2.length;j++){
//       debugger
//         // console.log(roster[0][j]);
//         obj[roster2[j]] = roster[i][j]
//         // console.log((obj));
//         // console.log('----------------------');
//
//     }
//
//     arr.push(obj)
//   }
//   return arr
// }

var roster = [
  ['Number','Name','Position','Positiopergame'],
  [12,'Joe s','center',[14,32,7,0,23]],
  [9,'Ms. Bucket','center',[19,0,11,22,0]]
]
// let obj ={}
let temp;
let arr = []
function convert_roster_format (roster){
  for (let i = 1;i<roster.length;i++){
    let obj ={}
    for(let j = 0;j<roster[i].length;j++){
      // debugger
        // console.log(roster[0][j]);
        obj[roster[0][j]] = roster[i][j]
        // console.log((obj));
        // console.log('----------------------');

    }

    arr.push(obj)
  }
  return arr
}

var obj_roster = convert_roster_format(roster)

console.log(obj_roster)

//
// var obj_roster = convert_roster_format(roster)
//
// console.log(obj_roster)
