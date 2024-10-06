export default function appendToEachArrayValue(array, appendString) {
  for (const [i, value] of array.entries()) {
    array[i] = appendString + value;
  }

  return array;
}
