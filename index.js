var roster = [
    ["Number", "Name", "Position", "Point per Game"],
    [13, "Joe", "Center", [14, 32, 7]],
    [13, "Sally", "Point Guard", [14, 32, 7]]
];

function convert_roster_format(root) {
    var pushArr = [];
    for (var i = 1; i < root.length; i++) {
        var namaObj = {};
            namaObj[root[0][0]] = root[i][0],
            namaObj[root[0][1]] = root[i][1],
            namaObj[root[0][2]] = root[i][2],
            namaObj[root[0][3].replace(/ /g, '')] = root[i][3],
            pushArr.push(namaObj);
    }

    return pushArr;
}

// console.log(convert_roster_format(roster));

var object_roster = convert_roster_format(roster);

console.log(object_roster[1]);

console.log(object_roster[0]["Name"]=="Joe");