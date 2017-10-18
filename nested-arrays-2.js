let object_roster = [];
function convert_roster_format(roster)
{
  for (let i = 1; i < roster.length; i++)
  {
    let obj = {};
    for (let j = 0; j < roster[0].length; j++)
    {
      obj[roster[0][j]] = roster[i][j];
    }
    object_roster.push(obj);
  }
}



let roster = [
  ["Number", "Name", "Position", "Points per Game"],
  [12, "Joe Schmo", "Center", [14, 32, 7, 0, 23]],
  [9, "Ms. Buckets", "Point Guard", [0, 30, 16, 0, 25]],
  [31, "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25]],
  [7, "Sally Talls", "Power Forward", [18, 29, 26, 31, 19]],
  [22, "MK DiBoux", "Small Forward", [11, 0, 23, 17, 0]]
]


convert_roster_format(roster);

console.log(object_roster);
