export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const dept of Object.values(report.allEmployees)) {
    allEmployees = [...allEmployees, ...dept];
  }
  return allEmployees;
}
