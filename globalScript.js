//global data source
let blueMatch = {};
let count = localStorage.getItem('count') ? JSON.parse(localStorage.getItem('count')): 0;
let elems = [];

localStorage.getItem('correct') ? localStorage.getItem('correct'): localStorage.setItem('correct', 0)
localStorage.getItem('wrong') ? localStorage.getItem('wrong'): localStorage.setItem('wrong', 0)
