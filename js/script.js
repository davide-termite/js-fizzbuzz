// Importo ul da html
var list = document.getElementById ("fizzbuzz");

// Creo variabile vuota Output
var output;

//  Creo numeri da 1 a 100
for (var i = 1; i <= 100; i++) {

  // Multipli di 3 e 5
  // if (i%15 === 0)
  if (i%3 === 0 && i%5 === 0){
    output = (i + " FizzBuzz");
  }
  // Multipli di 3
  else if (i%3 === 0) {
    output = (i + " Fizz");
  }
  // Multipli di 5
  else if (i%5 === 0) {
    output = (i + " Buzz");
  } else {
    output = i
  }

  // Importo output in HTML
  list.innerHTML += '<li>' + output + '</li>';
}
