'use strict'

let roster = [
['Number', 'Name', 'Position', 'Points Per Game'],
[12,'Joe Schmo', 'Center', [14,32,7,0,23]],
[9,'Ms.BUcket', 'Points GUard', [19,0,11,22,0]],
[31,'Harvey kay', 'Shooting GUard', [0,30,16,0,25]],
[7,'Sally Talls', 'Power Forward', [18,29,26,31,19]],
[22,'MK DibOux', 'Small Forward', [11,0,23,17,0]]
]


function convert_roster_format(ros){
	let arr = [],
		header = ros[0]

		console.log(header)

	ros.forEach((data_obj)=>{
			arr.push({
				number : data_obj[0],
				name : data_obj[1],
				position : data_obj[2],
				poinstPerGame : data_obj[3] 
			})
			
	})

 return arr.slice(1)
}

// console.log(convert_roster_format(roster))

var object_roster = convert_roster_format(roster)

console.log(object_roster[0])
console.log(object_roster[0]['name'] == 'Joe Schmo')

