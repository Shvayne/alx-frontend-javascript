export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  if (position < 0 || position >= length) {
    throw new RangeError('Position outside range');
  }

  const dataView = new DataView(buffer);

  dataView.setInt8(position, value);

  return dataView;
}
