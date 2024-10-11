export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: 'Geebee',
  lastName: 'Frost',
  experienceTeachingC: 10,
};

cpp.setTeacher = cTeacher;
console.log('C++', cpp.getRequirements(), cpp.getAvailableTeacher());
java.setTeacher = cTeacher;
console.log('Java', java.getRequirements(), java.getAvailableTeacher());
react.setTeacher = cTeacher;
console.log('React', react.getRequirements(), react.getAvailableTeacher());
