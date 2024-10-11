export default function hasValueFromArray(set, array) {
  return array.every((element) => set.has(element));
}
