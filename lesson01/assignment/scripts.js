// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#example-form .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber)

      // Use reduce to sum all the numbers in the data array
      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-form .output').innerHTML = sum
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })


  //Find form-1 and handle the event
  const formOne = document.querySelector('#form-1');

  formOne.addEventListener('submit', function(event){
    event.preventDefault();

    //Collect user input
    const inputField = document.querySelector('#form-1 .input');
    const userInput = inputField.value;

    //Splits the string to individual characters
    const userString = userInput.split('');

    //New array to hold non-vowels
    const newArray = [];

    userString.forEach(function(letter){

      //Check for vowels
      if( letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' || letter.toLowerCase() === 'i' || letter.toLowerCase() === 'o' || letter.toLowerCase() === 'u'){

        //Letter is pushed into the new array if it meets the above criteria
        newArray.push(letter);

        //Number of array items are displayed on page
        document.querySelector('#form-1 .output').innerHTML = newArray.length;

        //Form cleared
        inputField.value = '';
      }
    })
  })

  //Find form-2 and handle the event
  const formTwo = document.querySelector('#form-2');

  //The number of guests other people are bringing
  const partyGuests = [22, 35, 41, 10];

  formTwo.addEventListener('submit', function(event){
    event.preventDefault();

    //Pulls user information
    const userInput = document.querySelector('#form-2 .input').value;
    const userNumber = Number(userInput);

    //Sets guest total counter
    let totalGuest = 0;

    //Adds user guests to array of other guests and runs the map array method
    partyGuests.push(userNumber);
    partyGuests.map(eggFinder);

    function eggFinder(guests){

      //Finds the total of the guest array
      totalGuest = totalGuest + guests;

      //1 ostrich egg can feed 22 people
      const eggCount = totalGuest/22;

      //Updates the html page and rounds out the number
      document.querySelector('#form-2 .output').innerHTML = parseFloat(eggCount);
    };

    //CLears the input field
    document.querySelector('#form-2 .input').value = '';

  })

  const formThree = document.querySelector('#form-3');

  //Select fruit


  formThree.addEventListener('submit', function(event){

    const favFruit = ['strawberry', 'blueberry', 'cherry']
    event.preventDefault();

    const userInput = document.querySelector('#form-3 .input').value;

    favFruit.push(userInput);

    function berryCheck(currentFruit){
      //Maybe you can turn this for a long string checker if you cant get the berries to work
      // if(currentFruit.includes('berry')){
      //   console.log('yass');
      //   console.log(favFruit);
      // }
      return currentFruit.includes('berry');
      console.log('I ran?');


    }

    favFruit.filter(berryCheck);

  });







})
