function FizzBuzz(){
let Max = document.getElementById("Max").value
let Fizz = document.getElementById("Fizz").value
let Buzz = document.getElementById("Buzz").value
for (i=1 ; i<Max ; i++){
    if ((i % Fizz == 0) && (i % Buzz == 0))
        console.log(i + " FizzBuzz");
    else if (i % Fizz == 0)
        console.log(i + " Fizz")
    else if (i % Buzz == 0)
        console.log(i + " Buzz")
    else console.log(i)}
}