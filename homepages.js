// data dummy
let data = [
  { name: "Mark", age: 20, email: "markzucciceberg@gmail.com" },
  { name: "Michael", age: 25, email: "michaelmekdonal@gmail.com" },
  { name: "Rey", age: 30, email: "reyreyreyreynaldi@gmail.com" },
];

// menampilkan data didalam tabel
function showUserData() {
  let mainTable = document.querySelector("#mainDataTable tbody");
  mainTable.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let row = "<tr>";
    row += "<td>" + data[i].name + "</td>";
    row += "<td>" + data[i].age + "</td>";
    row += "<td>" + data[i].email + "</td>";
    row +=
      "<td><button class='edit' type='button' onclick='editUserData(" +
      i +
      ")'>Edit</button></td>";
    row +=
      "<td><button class='delete' type='button' onclick='deleteUserData(" +
      i +
      ")'>Delete</button></td>";
    row += "</tr>";
    mainTable.innerHTML += row;
  }
}

//menambahkan data
function addUserData() {
  let name = document.querySelector("#userInputName");
  let age = document.querySelector("#userInputAge");
  let email = document.querySelector("#userInputEmail");
  data.push({ name: name, age: age, email: email });
  showUserData();
}

//menghapus data
function deleteUserData() {
  data.splice(0, 1);
  showUserData();
}
