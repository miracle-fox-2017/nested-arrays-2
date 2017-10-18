var roster = [
    ['Number', 'Name', 'Position', 'Points per Game'],
    [12, 'Joe Schmo', 'Center', [12, 32, 1, 0, 21]],
    [1, 'Angga', 'Point', [13, 33, 2, 0, 22]],
    [12, 'Joe Schmo 2', 'BackCenter', [14, 34, 3, 0, 23]],
    [12, 'Joe Schmo 3', 'CenterLeft', [14, 34, 4, 0, 24]]
]
var arr = [];


function convert_roster_format(roster) {
    
    for (var i = 1; i < roster.length; i++) {
        var rostObj = {}
        for (var j = 0; j < roster[0].length; j++) {
            rostObj[roster[0][j]] = roster[i][j];
        }
        arr.push(rostObj)
    }
    return arr
}

var object_roster = convert_roster_format(roster)
console.log(object_roster[2].Name)