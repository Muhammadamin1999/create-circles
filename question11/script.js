//   // Data generator function
//   function generateData(numRows) {
//     const data = [];
//     for (let i = 1; i <= numRows; i++) {
//       data.push([
//         `Row ${i} Column 1 with long string that will wrap to multiple lines`,
//         `Row ${i} Column 2 with short string`,
//         `Row ${i} Column 3 with medium string that will wrap to multiple lines`,
//         `Row ${i} Column 4 with long string that will break and overflow to next line`,
//         `Row ${i} Column 5 with short string`,
//         `Row ${i} Column 6 with medium string that will wrap to multiple lines`,
//         `Row ${i} Column 7 with long string that will break and overflow to next line`
//       ]);
//     }
//     return data;
//   }

//   const table = document.querySelector('table');
//   const data = generateData(10); // Generate 10 rows of data

//   // Add data to table
//   data.forEach(rowData => {
//     const row = document.createElement('tr');
//     rowData.forEach(cellData => {
//       const cell = document.createElement('td');
//       cell.textContent = cellData;
//       row.appendChild(cell);
//     });
//     table.appendChild(row);
//   });

function generateData(numRows) {
    const data = [];
    const columns = [
      { name: "id", generator: () => faker.random.uuid() },
      { name: "firstName", generator: () => faker.name.firstName() },
      { name: "lastName", generator: () => faker.name.lastName() },
      { name: "email", generator: () => faker.internet.email() },
      { name: "phone", generator: () => faker.phone.phoneNumber() },
      { name: "address", generator: () => faker.address.streetAddress() },
      { name: "city", generator: () => faker.address.city() },
      { name: "state", generator: () => faker.address.state() },
      { name: "country", generator: () => faker.address.country() },
      { name: "zipCode", generator: () => faker.address.zipCode() }
    ];
  
    for (let i = 0; i < numRows; i++) {
      const row = {};
      for (const column of columns) {
        row[column.name] = column.generator();
      }
      data.push(row);
    }
  
    return data;
  }
  
  const data = generateData(2000);
//  console.log(data)

function insertRows(data) {
    const tableBody = document.querySelector("table tbody");
    for (const row of data) {
      const tableRow = document.createElement("tr");
      for (const column of Object.values(row)) {
        const tableCell = document.createElement("td");
        tableCell.textContent = column;
        tableRow.appendChild(tableCell);
      }
      tableBody.appendChild(tableRow);
    }
  }