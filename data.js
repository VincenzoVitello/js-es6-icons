const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
//creo variabili per interagire con elementi del DOM
let container = document.querySelector('.ms_container');
let selector = document.getElementById('selector');
let animals = icons.filter((element) => { return element.type == "animal"});
let users = icons.filter((element) => { return element.type == "user"});
let vegetables = icons.filter((element) => { return element.type == "vegetable"});
console.log (animals)
console.log 
//creo funzione che mi permetta di creare gli elementi box senza filtrarli
function genCards(){
	for (i=0; i<icons.length; i++){
		container.innerHTML += 
		`
		<div class="box d-flex justify-content-center align-items-center">
            <i class="fas fa-${icons[i].name}" style="color: ${icons[i].color};"></i>
        </div>
		`
	}
}
genCards(icons);
//creo ascoltatore di eventi sul selettore filtri
selector.addEventListener('change', function(){
	if(selector.value == "animal"){
		container.innerHTML = ""
		genCards(animals);
	}else if(selector.value == "user"){
		container.innerHTML = ""
		genCards(users);
	}else if(selector.value == "vegetable"){
		container.innerHTML = ""
		genCards(vegetables)
	}else{
		container.innerHTML = ""
		genCards(icons)
	}
});
//NON SO PERCHé NON SEGNALA ERRORI IN CONSOLE EPPURE NON VIENE GESTITO L'EVENTO CHANGE!!!!!!!!!! CODROIPO