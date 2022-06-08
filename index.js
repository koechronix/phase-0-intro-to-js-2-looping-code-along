// Code your solutions in this file
//for loop assignment
const thankYouCards = [];
function writeCards(namesArray, event) {
    for (let i = 0; i < namesArray.length; i++){
        thankYouCards.push(
            `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`
        );
      
    }
    return thankYouCards;
   
}
// while loop assignment

function countDown(startInt) {
    while (startInt>0){
        console.log(startInt);
        startInt -=1;
    }
    console.log(startInt);
}