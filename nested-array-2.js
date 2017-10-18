function convertRosterFormat(roster){
  let result = []
  for (var i = 1; i < roster.length; i++) {
    let obj = {}
    for (var j = 1; j < roster[i].length; j++) {
        obj[roster[0][j]]=roster[i][j]
    }
    result.push(obj)
  }
  return result
}

let roster = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [14,32,7,0,23]],
  [9, 'Ms. Buckets', 'Point Guard', [19,0,11,22,0]],
  [31, 'Harvey Kay', 'Shooting Guard', [0,30,16,0,25]],
  [7, 'Sally Talls', 'Power Forward', [18,29,26,31,19]],
  [22, 'Mk SiBoux', 'Small Forward', [11,0,23,17,0]],
]

let object_roster = convertRosterFormat(roster)
console.log(object_roster[2]);
console.log(object_roster[4]);
console.log(object_roster[0]['Name']=='Joe Schmo');
console.log(object_roster[4]['Position']=='Small Forward');
