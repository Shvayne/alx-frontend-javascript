interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles'
};

const studentsList: Student[] = [student1, student2];

function renderTable(student: Student[]): void {
  const table = document.createElement('table');
  const header = table.createTHead();
  const headerRow = header.insertRow(0);
  const firstNameHeader = headerRow.insertCell(0);
  const locationHeader = headerRow.insertCell(1);

  firstNameHeader.innerText = 'First Name';
  locationHeader.innerText = 'location';

  const tbody = table.createTBody();

  studentsList.forEach((student) => {
    const row = tbody.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);

    firstNameCell.innerText = student.firstName;
    locationCell.innerText = student.location;
  });

  document.body.appendChild(table);
}

renderTable(studentsList);