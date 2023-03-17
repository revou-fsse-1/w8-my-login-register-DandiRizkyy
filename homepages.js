const getLocalStorageData = localStorage.getItem("email");
if (getLocalStorageData !== null) {
  const headerMessage = document.querySelector(".user-name");
  headerMessage.innerHTML = `Halo ${getLocalStorageData}, selamat datang di dashboard.`;
}

// data dummy
let data = [
  { name: "Mark", age: 20, email: "markzucciceberg@gmail.com" },
  { name: "Michael", age: 25, email: "michaelmekdonal@gmail.com" },
  { name: "Rey", age: 30, email: "reyreyreyreynaldi@gmail.com" },
  { name: "Nube", age: 17, email: "nubecoolbangetz@gmail.com" },
  { name: "Aang", age: 50, email: "anggihthedragracer@gmail.com" },
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
      ")'>Edit</button>";
    row +=
      "<button class='delete' type='button' onclick='deleteUserData(" +
      i +
      ")'>Delete</button></td>";
    row += "</tr>";
    mainTable.innerHTML += row;
  }
}

//menambahkan data
function addUserData() {
  let name = document.querySelector("#userInputName").value;
  let age = document.querySelector("#userInputUmur").value;
  let email = document.querySelector("#userInputEmail").value;
  data.push({ name: name, age: age, email: email });
  showUserData();
}

//menghapus data
function deleteUserData(userData) {
  data.splice(userData, 1);
  showUserData();
}

//edit data
function editUserData(userData) {
  let name = prompt("Input Data Nama Baru", data[userData].name);
  let age = prompt("Input Data Umur Baru", data[userData].age);
  let email = prompt("Input Data Email Baru", data[userData].email);
  data[userData] = { name: name, age: age, email: email };
  showUserData();
}
