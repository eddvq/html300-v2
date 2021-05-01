// TODO: Create HTML code from cars JSON

const carsJSON = '[{"make":"Ford","model":"Mustang","year":2010,"color":"black"},{"make":"Chevy","model":"Corvette","year":1984,"color":"red"},{"make":"Jeep","model":"Wrangler","year":1999,"color":"silver"}]'

const cars = JSON.parse(carsJSON);

console.log(cars[0]);

let output = '<ul>';

cars.forEach(function(c){
  output = output + `<li>${c.make} is in ${c.color} and was made in the year ${c.year}.</li>`;
})

output += '</ul>';

document.querySelector('#list-container').innerHTML = output;
