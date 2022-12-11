function add() {
    var result = 
    Number(document.getElementById("firstno").value)+
    Number(document.getElementById('secondno').value);
    document.getElementById('answer').innerHTML=result;
}

function subtract() {
    var result2 = 
    Number(document.getElementById('firstno').value)-
    Number(document.getElementById('secondno').value);
    document.getElementById('answer').innerHTML=result2;
}

function multiply() {
    var result3 = 
    Number(document.getElementById('firstno').value)*
    Number(document.getElementById('secondno').value);
    document.getElementById('answer').innerHTML=result3;
}
