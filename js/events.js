console.log('This is Separted JS file');



function makeRed(){
    document.body.style.backgroundColor='red';
}

function makeTomato()
{
    document.body.style.backgroundColor='tomato';
}
// Option 02
const makeBlueButton = document.getElementById('make-blue');
       makeBlueButton.onclick=makeBlue  ;

       function makeBlue()
       {
        document.body.style.backgroundColor='blue';
       
       }