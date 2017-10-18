const roster=[
    ["Number","Name","Position","Points"],
    [12,"Joe Schmo","Center",[14,32,7,0,23]],
    [9,"Ms. Buckets","Point Guard",[19,0,11,22,0]],
    [31,"Harvey Kay","Shooting Guard",[0,30,16,0,25]],
    [7,"Sally Talls","Power Forward",[18,29,26,31,19]],
    [22,"MK DiBoux","Small Forward",[11,0,23,17,0]]
]
const convertRosterFormat=(roster)=>{
    let hasil=[];
    for(let i=1;i < roster.length;i++){
        let obj={};
        obj[roster[0][0]]=roster[i][0];
        obj[roster[0][1]]=roster[i][1];
        obj[roster[0][2]]=roster[i][2];
        obj[roster[0][3]]=roster[i][3];
        hasil.push(obj);
    }
    return hasil;
}

console.log(convertRosterFormat(roster));
