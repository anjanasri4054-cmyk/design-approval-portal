const designList = document.getElementById("designList");

let designs =
JSON.parse(localStorage.getItem("designs")) || [];

function updateStats(){

const total = designs.length;

const approved =
designs.filter(
design => design.status === "Approved"
).length;

const pending =
designs.filter(
design => design.status === "Pending"
).length;

document.getElementById("total").textContent =
total;

document.getElementById("approved").textContent =
approved;

document.getElementById("pending").textContent =
pending;
}

function renderDesigns(){

designList.innerHTML = "";

if(designs.length === 0){

designList.innerHTML = `
<div class="card">
<h3>No Designs Uploaded Yet</h3>
<p>Customer uploads will appear here.</p>
</div>
`;

updateStats();
return;
}

designs.forEach(design => {

const card = document.createElement("div");

card.classList.add("card");

let badgeClass = "";

if(design.status === "Approved"){
badgeClass = "approved-status";
}
else if(design.status === "Rejected"){
badgeClass = "rejected-status";
}
else{
badgeClass = "pending-status";
}

card.innerHTML = `
<h3>${design.name}</h3>

<p><strong>Email:</strong>
${design.email}</p>

<p><strong>File:</strong>
${design.fileName}</p>

<p>
<strong>Status:</strong>
<span class="${badgeClass}">
${design.status}
</span>
</p>

<p>
<strong>Notes:</strong>
${design.notes}
</p>

<a
href="${design.fileData}"
download="${design.fileName}"
>
Download Design
</a>

<div class="actions">

<button
class="approve"
onclick="updateStatus(${design.id},'Approved')">
Approve
</button>

<button
class="reject"
onclick="updateStatus(${design.id},'Rejected')">
Reject
</button>

<button
class="correction"
onclick="updateStatus(${design.id},'Pending')">
Correction
</button>

</div>
`;

designList.appendChild(card);

});

updateStats();
}

function updateStatus(id,status){

designs = designs.map(design => {

if(design.id === id){

design.status = status;

}

return design;
});

localStorage.setItem(
"designs",
JSON.stringify(designs)
);

renderDesigns();
}

const searchInput =
document.getElementById("search");

if(searchInput){

searchInput.addEventListener(
"keyup",
function(){

const value =
this.value.toLowerCase();

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

card.style.display =
card.innerText
.toLowerCase()
.includes(value)
? "block"
: "none";

});

});
}

renderDesigns();