export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const newGradeEntry = newGrades.find((grade) => grade.id === student.id);
      return {
        ...student,
        grade: newGradeEntry ? newGradeEntry.grade : 'N/A', // Default to 'N/A' if no grade found
      };
    });
}
