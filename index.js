let arr = []

function createObj(name, phase, gender) {
	arr.push({name : name, phase : phase, gender : gender})
}

function getData(name) {
	let result = arr.filter(function( obj ) {
  		return obj.name == name;
	})

	return result[0]
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')

console.log(arr);

console.log(getData('Akbar'));
console.log(getData('Icha'));