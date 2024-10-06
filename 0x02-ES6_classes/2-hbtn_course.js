export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError();
    } else if (typeof length !== 'number') {
      throw new TypeError()
    } else if (!Array.isArray(students)) {
      throw new TypeError()
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError();
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw TypeError()
    }
    this._length = value
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)){
      throw TypeError()
    }
    this._students = value;
  }

}