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
const tabelEl = document.getElementById("table")
const pageEl = document.querySelector(".page")
let pageOfList = 1
let tableHtml
let endOfArray
function showTable(Array, pageOfList,endOfArray ){
     
   tableHtml = document.getElementById("table").innerHTML = 
       ` <thead>
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
         </thead>`
      for( let i = (pageOfList-1)*10; i< endOfArray; i++){
        tableHtml += `
        <tr>
        <td>${Array[i].id}</td><td>${Array[i].firstName}</td><td>${Array[i].lastName}</td>
        <td>${Array[i].email}</td><td>${Array[i].phone}</td><td>${Array[i].address}</td>
        <td>${Array[i].city}</td><td>${Array[i].state}</td><td>${Array[i].countery}</td>
        <td>${Array[i].zipCode}</td>
      </tr>
        `

      }
      tableHtml += `tbody`
      tabelEl.innerHTML = ""
      tabelEl.innerHTML = tableHtml

      pageEl.innerHTML = `${numOfPage} of ${maxPage}`
      if(numOfPage === maxPage){
        document.querySelector("#next").disabled = true
      }else{
        document.querySelector("#next").disabled = false
      }
      if(numOfPage === 1){
        document.querySelector("#prev").disabled = true
      }else{
        document.querySelector("#prev").disabled = true
      }

}
showTable(Array, pageOfList, endOfArray)
searchArray()
function searchArray(){
  let newarray = []
  document.getElementById("search").addEventListener("keyup",function(){
    let search = this.value.charAt(0).toUppercase() + this.value.slice(1)
    newarray = data.filter(function(val){
      if(        val.id.includes(search) ||
      val.firstName.includes(search) ||
      val.lastName.includes(search) ||
      val.email.includes(search) ||
      val.phone.includes(search) ||
      val.address.includes(search) ||
      val.zipCode.includes(search) ||
      val.city.includes(search) ||
      val.state.includes(search) ||
      val.country.includes(search)){
        let newObj = {
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
        }
        return newObj
      }
    })
    let startPage = Math.ceil(newarray.length/10)
    let endPage = newarray.length
    showTable(newarray,startPage,endPage)
  })
}

const myNext = ()=>{
  numOfPage +=1
  let endOfArray = numOfPage *10
  showTable(data,numOfPage,endOfArray)

}

const myPrev = ()=>{
  if(numOfPage < 1){
    numOfPage = 1
  }
  numOfPage -=1
  let endOfArray = numOfPage *10
  showTable(data,numOfPage,endOfArray)

}