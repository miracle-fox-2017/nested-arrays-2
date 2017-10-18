var roster = [
  ['Number','Name','Position','Points per Game'],
  [12,'Joe Schmo','Center', [14,13,7,0,23] ],
  [9,'Ms. Buckets','Point Guard', [19,0,11,22,0] ],
  [31,'Harvey kay','Shooting Guard', [0,30,16,0,25] ],
  [7,'Sally Talls','Power Forward', [18,29,26,31,19] ],
  [22,'MK DiBoux','Small Forward', [11,0,23,17,0] ]
]
function convert_roster_format(roster) {
  let arr=[];

  for(let i = 1; i < roster.length;i++){
    arr.push({
  [roster[0][0]] : roster[i][0],
  [roster[0][1]] : roster[i][1],
  [roster[0][2]] : roster[i][2],
  [roster[0][3]] : roster[i][3]
});
 }
 return arr
 }

var obj_roster = convert_roster_format(roster)
console.log(obj_roster[2]);
console.log(obj_roster[0]['Name'] == 'Joe Schmo');
