const targetDiv = document.getElementById('seznam-filmu'); 
targetDiv.innerHTML = `` //clear the page

//fill the page with content
for(let i = 0; i < filmy.length; i++){
	targetDiv.innerHTML += `
		<div class="col">
			<div class="card">
				<img
					src="${filmy[i].plakat.url}"
					width="${filmy[i].plakat.sirka}"
					height="${filmy[i].plakat.vyska}"
					class="card-img-top"
					alt="plakát"
				/>
				<div class="card-body">
					<h5 class="card-title">${filmy[i].nazev}</h5>
					<p class="card-text">${filmy[i].ochutnavka}</p>
					<a href="film.html#${filmy[i].id}" class="btn btn-primary">Přehrát</a>
				</div>
			</div>
		</div>
	`;
}
