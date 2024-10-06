export function createEmployeesObject(departmentName, ...employees) {
  return {
    [departmentName]: employees,
  };
}
