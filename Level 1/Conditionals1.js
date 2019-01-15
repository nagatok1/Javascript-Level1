function PrintPerson(){
    let person={
        name : document.getElementById("name").value,
        age : document.getElementById("age").value,
        occupation : document.getElementById("occupation").value
    };
if (person.age>=20 && person.age<=40)
console.log("True");

else console.log("False")
}