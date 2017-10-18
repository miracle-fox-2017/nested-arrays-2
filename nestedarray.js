var arr = [
  ['Number','Name','Position','Points per Game',],
  [30,'Stephen Curry','Point Guard',[68, 40, 43, 44, 46]],
  [24,'Kobe Bryant','Shooting Guard',[55, 67, 81, 64, 32]],
  [23,'Michael Jordan','Small Forward',[67, 43, 87, 60, 40]],
  [32,'Shaq O Neal','Center',[32, 43, 54, 65, 77]],
  [35,'Kevin Durant','Power Forward',[44, 55, 66, 77, 88]]
]

function convert_roster_format(arr) {
var obj = {};
var array = [];
  for(var i = 1 ; i < arr.length ; i++) {
    obj = {};
    
    obj[arr[0][0]] = arr[i][0];
    obj[arr[0][1]] = arr[i][1];
    obj[arr[0][2]] = arr[i][2];
    obj[arr[0][3]] = arr[i][3];

    array.push(obj);
  }
  return array;
}


console.log(convert_roster_format(arr));
