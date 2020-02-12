
const s = 'engineering';
function toArray(string) {
  return _.toArray(string);
}


function countOccurrences(list) {
  return _.countBy(toArray(list));
}

console.log(countOccurrences(s));
