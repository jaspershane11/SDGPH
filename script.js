const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if (hour < 12) {
  greeting.innerText = "Good Morning!";
} else if (hour < 18) {
  greeting.innerText = "Good Afternoon!";
} else {
  greeting.innerText = "Good Evening!";
}

function toggleInfo() {
  const info = document.getElementById("moreInfo");
  info.style.display = (info.style.display === "none") ? "block" : "none";
}

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let error = document.getElementById("error");

  if (name === "" || email === "") {
    error.innerText = "Please fill out all fields!";
    return false;
  }

  alert("Form submitted!");
  return true;
}