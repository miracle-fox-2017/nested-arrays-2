function convert_roster_format(roster){
	var objRoster = [];

	for (var i = 0; i < roster.length - 1; i++) {
		objRoster[i] = {};

		for (var j = 0; j < roster[0].length; j++) {
			objRoster[i][roster[0][j]] = roster[i+1][j];
		}
	}

	return objRoster;
}

function joinString(str){
	return str.split(' ').join('').toLowerCase();
}

var roster = [
	["Number", "Name", "Position", "PointsperGame"],
	[12, "Joe Schmo", "Center", [14, 32, 7, 0, 23]],
	[9, "Ms. Buckets", "Points Guard", [19, 0, 11,22,0]],
	[31, "Harvey Hay", "Shooting Guard", [0, 30, 16, 0, 25]]
];

var object_roster = convert_roster_format(roster);

console.log(object_roster);
console.log(object_roster[2]);
console.log(object_roster[0]['Name'] == "Joe Schmo");