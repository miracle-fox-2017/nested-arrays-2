var roster = [
              ['Number', 'Name', 'Position', 'Points per Game'],
              [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23]],
              [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0]],
              [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25]],
              [7, 'Sally Talls', 'Power Forward', [18, 29, 26, 31, 19]],
              [22, 'MK DiBoux', 'Small Forward', [11, 0, 23, 17, 0]]
            ]


function convert_roster_format(roster){
  var arr = []
  // arr.push({ 'number': number, 'name' : name, 'position' : position, 'pointsPerGame' : points});
  // var obj = {
  //   roster[0][0]: number,
  //   roster[0][1]: name,
  //   roster[0][2]: position.
  //   roster[0][3]: points
  // };
  for(let i = 1; i < roster.length; i++){
    var obj = {};
    obj[roster[0][0]] = roster[i][0],
    obj[roster[0][1]] = roster[i][1],
    obj[roster[0][2]] = roster[i][2],
    obj[roster[0][3]] = roster[i][3];
    arr.push(obj);

    // for(let j = 0; j < )
    // let obj = {}
    // obj[[roster[0][0]]];
    //   console.log(obj);
  }
  return arr;
}
// console.log(obj);
// console.log(convert_roster_format(roster))
var object_roster = convert_roster_format(roster)
console.log(object_roster)

// let obj = {}
// obj[roster[0][0]] = 20;
// obj[roster[0][1]] = 'Ida';
// console.log(obj);
// console.log(roster[0][0])
// var obj = {
//           roster[0][0] = '',
//           roster[0][1] = '',
//           roster[0][2] = '',
//           roster[0][3] = ''
//           };
//
//           console.log(obj);
