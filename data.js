const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: generateRandomColor()
	}
];
//creo variabili per interagire con elementi del DOM
let container = document.querySelector('.ms_container');
let selector = document.getElementById('selector');
let animals = icons.filter((element) => { return element.type == "animal"});
let users = icons.filter((element) => { return element.type == "user"});
let vegetables = icons.filter((element) => { return element.type == "vegetable"});

function genCards(arrayFiltred){
	arrayFiltred.forEach((element) => {
		container.innerHTML += 
		`
 		<div class="box d-flex justify-content-center align-items-center">
             <i class="fas fa-${element.name}" style="color: ${element.color};"></i>
			 <br>
			 <p>${element.name}</p>
         </div>
 		`
	})
}

genCards(icons);

//creo ascoltatore di eventi sul selettore filtri
selector.addEventListener('change', function(){
	if(this.value == "animals"){
		container.innerHTML = ""
		genCards(animals);
	}else if(this.value == "user"){
		console.log ('ciao');
		container.innerHTML = ""
		genCards(users);
	}else if(this.value == "vegetable"){
		container.innerHTML = ""
		genCards(vegetables)
	}else{
		container.innerHTML = ""
		genCards(icons)
	}
});


//genero funzione da richiamare poi come valore di color all'interno dei miei oggetti contenuti nell'array icons
function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}