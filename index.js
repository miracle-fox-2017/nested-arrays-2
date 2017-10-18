var roster = [
  ["Number", "Name", "Position", "Points per Game"],
  [12, "Joe Schmo", "Center", [14, 32, 7, 0, 23] ],
  [9, "Ms Buckets", "Point Guard", [19, 0, 11, 22, 0] ],
  [31, "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25] ],
  [7, "Sally Talls", "Power Guard", [18, 29, 26, 31, 19] ],
  [22, "MK DIBoux", "Small Forward", [11, 0, 23, 17, 0] ]
];

let convert_roster_format = (arr) => {
  //yang pertama jadi key
  //selain itu (1 sampai abis) adalah data
  let result = [];
  //new objct
  let obj = {};
  for(let i = 1; i<arr.length; i++){
    debugger;
    for(let j = 0; j<arr[i].length; j++){
      //set key = value disini
      obj[arr[0][j]] = arr[i][j];

      //if terakhir push dan reset obj
      if(j == arr[i].length-1){
        result.push(obj);
        obj = {};
      }
    }
  }
  return result;
}

let object_roster = convert_roster_format(roster);

//test case
console.log(object_roster[0].name == undefined); // [12, "Joe Schmo", "Center", [14, 32, 7, 0, 23] ],
console.log(object_roster[0].Name == 'Joe Schmo'); // [12, "Joe Schmo", "Center", [14, 32, 7, 0, 23] ],
console.log(object_roster[2].Number == 31); //[31, "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25] ],
console.log(object_roster[3].Position == 'Power Guard'); //[31, "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25] ],
console.log(object_roster[4]['Points per Game'][2] == 23); //[22, "MK DIBoux", "Small Forward", [11, 0, 23, 17, 0] ]
