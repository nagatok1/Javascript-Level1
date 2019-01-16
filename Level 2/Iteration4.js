function DivideBy3(){
let Number = +document.getElementById("Number").value;
while (Number != 1){
    if ((Number % 3) == 0){
        let Number2 = (Number / 3);
        console.log(Number + " / 3 = " + Number2);
        Number = Number2;
    }
    else if ((Number + 1) % 3 === 0){
        console.log(Number + " + 1 = " + (Number + 1));
        Number++;
    }
    else if ((Number - 1) % 3 === 0){
        console.log(Number + " - 1 = " + (Number - 1));
        Number--;
    }

    else console.log("ERROR");
        }
console.log("FINISHED");
}