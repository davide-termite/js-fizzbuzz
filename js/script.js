//  Creo numeri da 1 a 100
for (var i = 1; i <= 100; i++) {

  // Multipli di 3 e 5
  // if (i%15 === 0)
  if (i%3 === 0 && i%5 === 0){
    console.log(i + " FizzBuzz");
  }
  // Multipli di 3
  else if (i%3 === 0) {
    console.log(i + " Fizz");
  }
  // Multipli di 5
  else if (i%5 === 0) {
    console.log(i + " Buzz");
  } else {
    console.log(i);
  }
}
