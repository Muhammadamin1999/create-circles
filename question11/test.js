// generate data
const data = [];
for (let i = 1; i <= 30; i++) {
  const row = {};
  row.id = i;
  row.name = "Name " + i;
  row.surname = "Surname " + i;
  row.email = "email" + i + "@example.com";
  row.phone = "123-456-7890";
  row.address = "123 Main St";
  row.city = "City";
  row.state = "State";
  row.country = "Country";
  row.zipcode = "12345";
  data.push(row);
}

const tableContainer = document.getElementById("table-container");
const dataTable = document.getElementById("data-table");
const pagination = document.querySelector(".pagination");

const rowsPerPage = 10;
let currentPage = 1;

function displayData() {
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const tableData = data.slice(startIndex, endIndex);
  const tableRows = tableData.map((row) => {
    return `
      <tr>
        <td>${row.id}</td>
        <td>${row.name}</td>
        <td>${row.surname}</td>
        <td>${row.email}</td>
        <td>${row.phone}</td>
        <td>${row.address}</td>
        <td>${row.city}</td>
        <td>${row.state}</td>
        <td>${row.country}</td>
        <td>${row.zipcode}</td>
      </tr>
    `;
  }).join("");

  dataTable.querySelector("tbody").innerHTML = tableRows;
}

function displayPagination(pageIndex) {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const paginationContainer = document.querySelector(".pagination");
  
    let paginationHTML = "";
  
    for (let i = 0; i < totalPages; i++) {
      paginationHTML += `<button class="pagination-button ${i === pageIndex ? "active" : ""}" data-page="${i}">${i + 1}</button>`;
    }
  
    paginationContainer.innerHTML = paginationHTML;
  
    const paginationButtons = document.querySelectorAll(".pagination-button");
  
    for (let i = 0; i < paginationButtons.length; i++) {
      paginationButtons[i].addEventListener("click", function() {
        const pageIndex = parseInt(this.getAttribute("data-page"));
        displayTable(pageIndex);
        displayPagination(pageIndex);
      });
    }
  }
  