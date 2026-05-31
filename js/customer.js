const customerDesigns =
document.getElementById(
"customerDesigns"
);

const designs =
JSON.parse(
localStorage.getItem("designs")
) || [];

designs.forEach(design => {

customerDesigns.innerHTML += `

<div class="card">

<h3>${design.fileName}</h3>

<p>Status:
${design.status}
</p>

<p>
${design.notes}
</p>

</div>

`;

});