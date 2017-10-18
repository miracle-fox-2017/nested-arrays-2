let arr = [];
function createObj(name, phase, gender)
{
  arr.push({
    name : name,
    phase : phase,
    gender : gender
  })
}

createObj("Akbar", 1, "male");
createObj("Icha", 1, "female");
createObj("Adhit", 2, "male");

function getData(name)
{
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i].name === name)
    {
      return arr[i];
    }
  }
  return 0;
}


console.log(getData("Icha"));
