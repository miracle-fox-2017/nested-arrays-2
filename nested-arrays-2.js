let roster = [
  ['number','name','position','pointsPerGame'],
  [12, 'Joe Schmo','Center',[14,32,7,0,23]],
  [9,'Ms. Buckets','Point Guard',[19,0,11,22,0]],
  [31,'Harvey Kay','Shooting Guard',[0,30,16,0,25]],
  [7,'Sally Talls','Power Forward',[18,29,26,31,19]],
  [22,'MK DiBoux','Small Forward',[11,0,23,17,0]]
]

function convert_roster_format(roster){
  let arr = []
  for(let y = 1; y < roster.length; y++){
    let obj = {}
    let rosterY = roster[y]
    for(let i = 0; i < rosterY.length; i++){
      obj[roster[0][i]] = roster[y][i]
    }
    arr.push(obj)
  }
  return arr
}
let object_rooster = convert_roster_format(roster)
console.log(object_rooster[2]);
