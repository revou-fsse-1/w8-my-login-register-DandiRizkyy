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
    alert("Isi bro");
  } else if (!myRegex.test(userEmail)) {
    alert("Input email yang tepat");
  } else if (!userPassword) {
    alert("Isi Passwordnya Dulu Yok");
  } else if (!validateUpperCase.test(userPassword)) {
    alert(
      "Minimal 1 Uppercase di Paling Depan dan Tidak Boleh Lebih Dari 12 Karakter"
    );
  } else {
    alert("selamat!");
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
    alert("Isi bro");
  } else if (!myRegex.test(userEmail)) {
    alert("Input email yang tepat");
  } else if (!userPassword) {
    alert("Isi Passwordnya Dulu Yok");
  } else if (!validateUpperCase.test(userPassword)) {
    alert(
      "Minimal 1 Uppercase di Paling Depan dan Tidak Boleh Lebih Dari 12 Karakter"
    );
  } else {
    alert("Meow! 😸");
    localStorage.setItem("email", userEmail);
    localStorage.setItem("password", userPassword);
    window.location.href = "homepages.html";
  }
}
