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


       const makeBlackColor = document.getElementById('make-black');
       makeBlackColor.onclick = makeBlack  ;

       function makeBlack()
       {
        document.body.style.backgroundColor='black';
       }


 // Option 03
 const makePurpleButton= document.getElementById('make-purple');

 makePurpleButton.onclick = function makePurple()
 {
     document.body.style.backgroundColor='purple';
 }

//  Option 04
const pinkButton = document.getElementById('make-pink');
       pinkButton.addEventListener('click',makePink);

       function makePink()
       {
        document.body.style.backgroundColor='pink';
       }
// Option 04 Another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen()
{
document.body.style.backgroundColor='green';
});

// Option 04 final   Important
document.getElementById('make-white').addEventListener('click', function makeWhite()
{
document.body.style.backgroundColor='white';
});