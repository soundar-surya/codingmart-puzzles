//check equality
function checkEquality (){ 
    let val = $('#Sequence-textBox').val();
    let c = localStorage.getItem('count');
    localStorage.setItem(c, val)
    window.location.href = 'playerScore.html';
}