let roster=[
     ["Number","Name","Position","Points"],
     [12,"Joe Schmo","Center",[14,32,7,0,23]],
     [9,"Ms. Buckets","Point Guard",[19,0,11,22,0]],
     [31,"Harvey Kay","Shooting Guard",[0,30,16,0,25]],
     [7,"Sally Talls","Power Forward",[18,29,26,31,19]],
     [22,"MK DiBoux","Small Forward",[11,0,23,17,0]]
 ];

 function convertRosterFormat(roster){
     let newArr=[];
     for (var i = 0; i < roster.length - 1; i++) {
		     newArr[i] = {};
    		for (var j = 0; j < roster[0].length; j++) {
    			newArr[i][roster[0][j]] = roster[i+1][j];
    		}
    	}
     return newArr;
 }

 console.log(convertRosterFormat(roster));
