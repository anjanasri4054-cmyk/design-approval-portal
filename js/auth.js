function login() {

const role =
document.getElementById("role").value;

if(role === "admin") {

localStorage.setItem(
"userRole",
"admin"
);

window.location.href =
"admin.html";

}
else {

localStorage.setItem(
"userRole",
"customer"
);

window.location.href =
"customer-dashboard.html";

}

}