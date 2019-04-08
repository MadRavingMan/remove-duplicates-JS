"use strict";

// 1 UŽDUOTIS.
// Parašyti funkciją, kuri iš masyvo pašalina dubliuotus žodžius nepakeičiant pradinio masyvo.
// Example input:
// [‘Tomas’, ‘Julius’, ‘Justas’, ‘Tomas’, ‘Mantas’, ‘Julius’]
// Expected output:
// [‘Tomas’, ‘Julius’, ‘Justas’, ‘Mantas’]

let inArray = ['Tomas', 'Julius', 'Justas', 'Tomas', 'Mantas', 'Julius'];
function unique(arrayIn) {
	let result = [];	//gautų rezultatų masyvas.
	for (let i = 0; i < arrayIn.length; i++){
		if (result.indexOf(arrayIn[i]) < 0) {	//if sąlyga, kuri tikrina ar "result" masyve yra iš pradinio masyvo paimta reikšmė.
		result.push(arrayIn[i]);	// Jeigu "result" masyve nėra ieškomos reikšmįs, tada ji yra įrašoma.
		}	
	}
	return result;
}
console.log(unique(inArray));

// 2 UŽDUOTIS.
// Praplėsti pirmos užduoties funkcionalumą taip, kad dubliuotus žodžius iš 
// masyvo galima būtų pašalinti ir naudojant masyvo plėtinį. 
// Pvz.: const resultArray = inputArray.removeDuplicates()

let inputArray = ['Tomas', 'Julius', 'Justas', 'Tomas', 'Mantas', 'Julius'];
Array.prototype.removeDuplicates = function() {
	let result = []; //gautų rezultatų masyvas.
	for (let i = 0; i < this.length; i++){
		if (result.indexOf(this[i])<0) {	//if sąlyga, kuri tikrina ar "result" masyve yra iš pradinio masyvo paimta reikšmė.
		result.push(this[i]);	// Jeigu "result" masyve nėra ieškomos reikšmįs, tada ji yra įrašoma.
		}
	}
	return result;
};
const resultArray = inputArray.removeDuplicates();
console.log(resultArray);

// 3 UŽDUOTIS.
// Papildyti ankstesnių užuočių kodą nauju masyvo plėtiniu, kuris leistų 
// dubliuotus objektus iš masyvo pašalinti pagal nurodytą objekto key.
// Reikalavimai: 
// • Funkcija neturėtų filtruoti pradinio masyvo jeigu jis yra tusčias. 
// • Jeigu objektas neturi nurodyto key, funkcija turi traktuoti jį kaip dublikatą. 
// • Funkcija pašalinti dublikatus turi kuo efektyvesniu būdu. 

let inputArr = [
	{ id: 1, name: 'Tomas' },
	{ id: 2, name: 'Mantas' },
	{ id: 3, name: 'Julius' },
	{ id: 1, name: 'Mindaugas' },
	{ id: 4, name: 'Justas' },
	{ id: 2, name: 'Mantas' },
	{ 		 name: 'Ignas' }];

Array.prototype.removeDuplicatesBy = function(x) {
	let compare = [];	//masyvas pagal, kurį lyginame.
	let results = [];	//gautų rezultatų masyvas.
	if (this.length > 1) {	//tikrinama ar masyvas turi daugiau nei 1 elementą. Masyvas > 1, neturės pasikartojimų (pagal sąlygą turėtų būti 0).
		for (let i=0 ; i < this.length; i++) {
			if (this[i][x]!=null && compare.indexOf(this[i][x])<0) {	//if sąlyga, kur tikriname, kad raktas turėtų reikšmę ir ar yra "compare" masyve mūsų rakto reikšmė.
			compare.push(this[i][x]) && results.push(this[i]); //Jeigu if sąlyga atitinka, į "compare" masyvą papildomai įrašome rakto reikšmę, o į "results" masyvą įrašome objektą.
			}
		}
		return results;
	}
	return this;	//Gražina pradinį masyvą, jeigu jame yra mažiau nei du elementai.
};
const resultArr = inputArr.removeDuplicatesBy('id');
console.log(resultArr);