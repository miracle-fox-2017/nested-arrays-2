const roster = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [13, 32, 7, 0, 23]],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0]]
];

const newRoster = [];

const convertRosterFormat = (roster) => {
  for (let i = 1; i < roster.length; i++) {
    const obj = {};

    obj[roster[0][0]]= roster[i][0];
    obj[roster[0][1]]= roster[i][1];
    obj[roster[0][2]]= roster[i][2];
    obj[roster[0][3]]= roster[i][3];

    newRoster.push(obj);
  }

  return newRoster;
}

const objectRoster = convertRosterFormat(roster);
