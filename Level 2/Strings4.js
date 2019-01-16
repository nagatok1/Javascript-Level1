function charRepeats(){
let count = 0;
let str= document.getElementById("String").value;
console.log(str);
    for(i = 0; i < str.length; i++) {
            if(str.charAt(i) == str.charAt(i + 1) && str.charAt(i) == str.charAt(i + 2)){
                count++;
                console.log(count);
            }

    }
    console.log("FINSIHED " + count + " Occurences of Triples");
}