var roster = [
  ["Number","Name","Position","Points per Game"],
  [12,"Joe Schmo","Center",[14,32,7,0,23]],
  [9,"Ms. Buckets","Point Guard",[19,0,11,22,0]],
  [31,"Harvey Kay","Shooting Guard", [0,30,16,0,25]],
  [7, "Sally Talls", "Power Forward ", [19,29,26,31,19]],
  [22, "MK DiBoux ", "Small Forward ", [11,0,23,17,0] ],
];

function nestedarr(arr) {
  var arrobj = []
  var obj = {}

  for(var i = 1; i < arr.length; i++) {
    for(var j = 0; j < arr[0].length; j++) {
      obj[arr[0][j]] = arr[i][j]
    }
    arrobj.push(obj)
    obj = {}
  }
  return arrobj
}

var object_roster = nestedarr(roster)

console.log(object_roster[2]);
console.log(object_roster[0]['Name'] == 'Joe Schmo');
