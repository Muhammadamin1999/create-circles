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
    { name: "zipCode", generator: () => faker.address.zipCode() },
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

const data = generateData(200);
var numOfPage = 1;
var endOfArray = 10;
const maxPage = Math.ceil(data.length / 10);
const pageEl = document.querySelector(".page");
const tableEl = document.getElementById("table");
var tableHtml;


function showtable(curArray, numOfPage, endOfArray) {
  tableHtml = document.getElementById("table").innerHTML = `
      <thead>
      <tr>
         <th>ID</th>
         <th>Name</th>
         <th>Surname</th>
         <th>Email</th>
         <th>Phone</th>
         <th>Address</th>
         <th>City</th>
         <th>State</th>
         <th>Country</th>
         <th>ZipCode</th>
      </tr> 
      </thead>`;

  
  

  if (!curArray) {
    document.getElementById(
      "error"
    ).innerHTML = `<span class='text-danger '>Not Found!</span>`;
  } else {
    //   document.getElementById("error").innerHTML = "";
    console.log(numOfPage);
    console.log(endOfArray);
    for (let i = (numOfPage - 1) * 10; i < endOfArray; i++) {
      tableHtml += ` 
                <tr> <td>${curArray[i].id}</td> <td>${curArray[i].firstName}</td> 
                  <td>${curArray[i].lastName}</td> <td>${curArray[i].email}</td> 
                  <td>${curArray[i].phone}</td> <td>${curArray[i].address}</td>
                  <td>${curArray[i].city}</td> <td>${curArray[i].state}</td>
                  <td>${curArray[i].country}</td> <td>${curArray[i].zipCode}</td></tr>`;
    }
  }

  tableHtml += `</tbody>`;
  tableEl.innerHTML = "";
  tableEl.innerHTML = tableHtml;
  pageEl.innerHTML = `${numOfPage} of ${maxPage}`;

  if (numOfPage === maxPage) {
    document.querySelector("#next").disabled = true;
  } else {
    document.querySelector("#next").disabled = false;
  }
  if (numOfPage === 1) {
    document.querySelector("#prev").disabled = true;
  } else {
    document.querySelector("#prev").disabled = false;
  }
}

showtable(data, numOfPage, endOfArray);
searchArray();
function searchArray() {
  var newarray = [];
  document.getElementById("search").addEventListener("keyup", function () {
    var search = this.value.charAt(0).toUpperCase() + this.value.slice(1);

    newarray = data.filter(function (val) {
      if (
        val.id.includes(search) ||
        val.firstName.includes(search) ||
        val.lastName.includes(search) ||
        val.email.includes(search) ||
        val.phone.includes(search) ||
        val.address.includes(search) ||
        val.zipCode.includes(search) ||
        val.city.includes(search) ||
        val.state.includes(search) ||
        val.country.includes(search)
      ) {
        var newobj = {
          id: val.id,
          firstName: val.firstName,
          lastName: val.lastName,
          email: val.email,
          country: val.country,
          phone: val.phone,
          address: val.address,
          zipCode: val.zipCode,
          state: val.state,
          city: val.city,
        };
        return newobj;
      }
    });

    let startPage = Math.ceil(newarray.length / 10);
    let endPage = newarray.length;
    showtable(newarray, startPage, endPage);
    document.querySelector("#next").disabled = true;
  });
}
////////////// Pagination /////////////////////

const myNext = () => {
  numOfPage += 1;

  let endOfArray = numOfPage * 10;
  showtable(data, numOfPage, endOfArray);
};

const myPrev = () => {
  if (numOfPage < 1) {
    numOfPage = 1;
  }

  numOfPage--;
  let endOfArray = numOfPage * 10;
  showtable(data, numOfPage, endOfArray);
};
