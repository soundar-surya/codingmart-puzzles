$(document).ready(function(){
    $('#scoreField1').text(localStorage.getItem('correct'))
    $('#scoreField2').text(localStorage.getItem('wrong'))
    let c = localStorage.getItem('count');
    let userInput = localStorage.getItem(c);
    let randomValue = JSON.parse(localStorage.getItem(`playerStat${c-1}`));
    if(userInput === Object.values(randomValue)[0].join('')){
        let correct = JSON.parse(localStorage.getItem('correct'));
        localStorage.setItem('correct', correct+1);
       $('#scoreField1').text(localStorage.getItem('correct'))
    }
    else{
        let wrong = JSON.parse(localStorage.getItem('wrong'));
        localStorage.setItem('wrong', wrong+1);
       $('#scoreField2').text(localStorage.getItem('wrong'))
    }
})

function redirect(){
    window.location.href = 'main.html';
    return;
}