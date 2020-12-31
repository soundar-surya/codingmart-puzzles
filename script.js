$(document).ready(function(){

    $('.grid-item').each(function(){
        elems.push(this)
    })

    console.log(main(blueMatch, count, elems))


});


//random number generator function
let randomNumber = () => (min,max) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//main function
let main = (blueMatch, count, elems) => {
        //color combination
        let colors = ['skyblue', 'pink'];
        let colorOrder = 1;
        blueMatch[count] = [];
        let generateRandomNumber = randomNumber()
        let interval = setInterval(() => {
                //generating random numbers for color and number
                let colorDecider = generateRandomNumber(0, 1);
                let numDecider = generateRandomNumber(0, 8);
                console.log(colorDecider)
                //applying color to the elem
                $(elems[numDecider]).css("background-color", colors[colorDecider])
                
                //clear the color and count the iteration
                setTimeout(() => $(elems[numDecider]).css("background-color", ""), 300);
    
                //set order
                if(colorDecider == 0){
                    blueMatch[count].push(numDecider+1)
                }
            }, 600);
    
        //clear timeout
        setTimeout(() => {
                clearInterval(interval)
                localStorage.setItem(`playerStat${count}`, JSON.stringify(blueMatch))
                count++;
                localStorage.setItem('count', count)
                window.location.href = 'checkAnswer.html';
            }, 3000)
        return blueMatch;
}

