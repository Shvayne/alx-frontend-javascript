export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const entr of array) {
    newArr.push(appendString + entr);
  }

  return newArr;
}
