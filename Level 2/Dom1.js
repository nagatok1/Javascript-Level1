let para = document.createElement("P");
let str1 = document.createTextNode("This is a paragraph");
para.id = "Para";
para.appendChild(str1);
document.body.appendChild(para);

function overwrite(){
    para.textContent = document.getElementById("String").value;
}
