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

  if (!userEmail) {
    alert("Isi Emailnya Dulu Donk 😾");
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
  } else {
    alert("Meow... Registrasi Berhasil !🙀");
    localStorage.setItem("email", userEmail);
    localStorage.setItem("password", userPassword);
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

  if (!userEmail) {
    alert("Isi emailnya dulu donk 😾");
  } else if (!myRegex.test(userEmail)) {
    alert("Input Email Yang Tepat");
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
  } else {
    alert("Meow ! Berhasil Login !😸");
    localStorage.setItem("email", userEmail);
    localStorage.setItem("password", userPassword);
    window.location.href = "homepages.html";
  }
}
