function DivideBy3(){
let Number = document.getElementById("Number").value
for (i=1 ; i<Max ; i++){
    if ((i % Fizz == 0) && (i % Buzz == 0))
        console.log(i + " FizzBuzz");
    else if (i % Fizz == 0)
        console.log(i + " Fizz")
    else if (i % Buzz == 0)
        console.log(i + " Buzz")
    else console.log(i)}
}