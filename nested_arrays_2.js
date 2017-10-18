let convert_roster_format = roster =>{
	let result = []
	for (let i = 1 ; i<roster.length ; i++){
	let newObj = {}	
		for (let j = 0 ; j<roster[i].length ; j++){
			newObj[roster[0][j]] = roster[i][j];
		}
		result.push(newObj)
	}
	return result;
}
var roster = [
	["Number","Name","Position","Points per Game"],
	[12, "Joe Schmo", "Center", [14,32,7,0,23]],
	[9, "Ms. Buckets", "Point Guard", [19,0,11,22,0]],
	[31,"Harvey Kay", "Shooting Guard", [0,30,16,0,25]],
	[7, "Sally Talls", "Power Forward", [18,29,26,31,19]],
	[22, "MK DiBoux", "Small Forward", [11,0,23,17,0]]
]
let object_roster = convert_roster_format(roster)

console.log(object_roster[0]["Name"] == "Joe Schmo")
console.log(object_roster[1]["Name"] == "Ms. Buckets")
console.log(object_roster[4]["Position"] == "Small Forward")