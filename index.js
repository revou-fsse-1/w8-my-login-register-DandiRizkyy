//set akun default
const getLocalStorageData = localStorage.getItem("data");
const userData = JSON.parse(getLocalStorageData) || [
  { id: "1", email: "admin@gmail.com", password: "Admin123" },
];

//fungsi registrasi
function registerPage() {
  const userEmail = document.getElementById("email").value;
  console.log(userEmail);
  const userPassword = document.getElementById("password").value;
  console.log(userPassword);
  const validateLowerCase = /[a-z]/;
  const validateUpperCase = /^[A-Z][A-Za-z0-9]{1,11}$/;
  const validateNumber = /[0-9]/;
  const myRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z.]{2,5}$/;

  const checkAccount = userData.find((e) => e.email === userEmail);
  if (!userEmail) {
    alert("Isi Emailnya Dulu Donk 😾");
  } else if (checkAccount !== undefined) {
    alert("Email sudah diregistrasi");
  } else if (!myRegex.test(userEmail)) {
    alert("Input Email Yang Tepat");
  } else if (!userPassword) {
    alert("Isi Passwordnya Dulu Yok");
  } else if (!validateUpperCase.test(userPassword)) {
    alert(
      "Minimal 1 Uppercase di Paling Depan dan Tidak Boleh Lebih Dari 12 Karakter"
    );
  } else if (!userPassword.match(validateNumber)) {
    alert("Minimal 1 Angka Didalam Password");
  } else if (!userPassword.match(validateLowerCase)) {
    alert("Minimal 1 Lowercase Didalam Password");
  } else if (checkAccount === undefined) {
    userData.push({
      id: userData.length + 1,
      email: userEmail,
      password: userPassword,
    });
    alert("Meow... Registrasi Berhasil !🙀");
    // localStorage.setItem("email", userEmail);
    // localStorage.setItem("password", userPassword);
    localStorage.setItem("data", JSON.stringify(userData));
    window.location.href = "index.html";
  }

  //e.preventDefault();
}

//fungsi login
function loginPage() {
  const userEmail = document.getElementById("email").value;
  console.log(userEmail);
  const userPassword = document.getElementById("password").value;
  console.log(userPassword);
  const validateLowerCase = /[a-z]/;
  const validateUpperCase = /^[A-Z][A-Za-z0-9]{1,11}$/;
  const validateNumber = /[0-9]/;
  const myRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z.]{2,5}$/;

  const checkAccount = userData.find(
    (e) => e.email === userEmail && e.password === userPassword
  );
  if (!userEmail) {
    alert("Isi emailnya dulu donk 😾");
  } else if (!myRegex.test(userEmail)) {
    alert("Input Email Yang Tepat");
  } else if (checkAccount === undefined) {
    alert("Email belum diregistrasi");
  } else if (!userPassword) {
    alert("Isi Passwordnya Dulu Yok");
  } else if (!validateUpperCase.test(userPassword)) {
    alert(
      "Minimal 1 Uppercase di Paling Depan dan Tidak Boleh Lebih Dari 12 Karakter"
    );
  } else if (!validateUpperCase.test(userPassword)) {
    alert("Minimal 1 Uppercase di Paling Depan");
  } else if (!userPassword.match(validateNumber)) {
    alert("Minimal 1 Angka Didalam Password");
  } else if (!userPassword.match(validateLowerCase)) {
    alert("Minimal 1 Lowercase Didalam Password");
  } else if (checkAccount !== undefined) {
    alert("Meow ! Berhasil Login !😸");
    localStorage.setItem("email", userEmail);
    localStorage.setItem("password", userPassword);
    window.location.href = "homepages.html";
  }
}
