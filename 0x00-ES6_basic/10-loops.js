export default function appendToEachArrayValue(array, appendString) {
    for (let [i, value] of array.entries()) {
      array[i] = appendString + value;
    }
  
    return array;
}