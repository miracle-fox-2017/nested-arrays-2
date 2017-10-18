var roster=[
["Number","Name","Position","Point Per Game"],
[12,"Joe Schmo","Center",[14, 32, 7, 0, 23]],
[9,"Ms. Buckets","Point Guard", [19,0,11,22,0]],
[31,"Harvey kay","Shooting Guard",[0,30,16,0,25]],
[7,"Sally Talls","Power Forward", [18,29,26,31,19]],
[22,"MK DiBoux","Small Forward",[11,0,23,17,0]]
]

function arrayToobject(arr){

	let result = []
	let obj = {}
	let a = 0

	for(let i=1; i<arr.length; i++){
		//console.log(arr[i]);
		obj = {}

		obj[`${arr[0][0]}`] = arr[i][0]
		obj[`${arr[0][1]}`] = arr[i][1]
		obj[`${arr[0][2]}`] = arr[i][2]
		obj[`${arr[0][3]}`] = arr[i][3]
		result[a]=[]
		result[a] = obj
		a++
	}

	console.log(result);
	return result
}

arrayToobject(roster)