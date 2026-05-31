document
.getElementById("uploadForm")
.addEventListener("submit", function(e){

e.preventDefault();

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const notes =
document.getElementById("notes").value;

const file =
document.getElementById("designFile").files[0];

const reader = new FileReader();

reader.onload = function(){

const designData = {

id: Date.now(),

name,

email,

notes,

fileName: file.name,

fileData: reader.result,

status: "Pending"

};

let designs =
JSON.parse(
localStorage.getItem("designs")
) || [];

designs.push(designData);

localStorage.setItem(
"designs",
JSON.stringify(designs)
);

alert("Design Uploaded Successfully");

document
.getElementById("uploadForm")
.reset();
};

reader.readAsDataURL(file);

});