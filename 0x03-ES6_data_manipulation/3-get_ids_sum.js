export default function getStudentIdsSum(list) {
  if (!Array.isArray(list)) {
    return 0;
  }

  return list.reduce((accumulator, student) => accumulator + student.id, 0);
}
