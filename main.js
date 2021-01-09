// FILTER I PRZYPOMNIENIE MAP

//  const arr = [15, 2, 5, 43, 88, 112, 119, 219];
 
//  const oddNumbers = arr.filter(number => number%2);
//  const evenNumbers = arr.filter(number => !(number%2));
//  const numBigThen100 = arr.filter(number => number > 100);

// //  Map
//  const double = arr.map(number => number * 2);
//  const people = arr.map(number => number + " osób");

// //  forEach
// arr.forEach((number, index) => arr[index] = number*2);


// Wyszukiwarka i lista
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
    console.log(tasks);
    ul.textContent = '';
    tasks.forEach(li => ul.appendChild(li));
};

input.addEventListener('input', searchTask);

const tab = ["Marcin", "Ania", "Agnieszka"];
const last = tab.shift();
const first = tab.unshift("Tomasz");

console.log(last); //Agnieszka
console.log(tab); //[Marcin, Ania]