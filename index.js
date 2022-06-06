// Code your solutions in this file
//for loop assignment
const names = ["Guadalupe", "Ollie" ,"Ali"];{
    event = "suprise";
}
function writeCards(names, event) {
    let thankYouCards = [];
    for (let i = 0; i < names.length; i++){
        thankYouCards.push(
            `Thank you, ${names[i]}, for the wonderful ${event}gift!`
        );
    }
    return thankYouCards();
}

function countDown(startInt) {
    while (startInt>0){
        console.log(startInt);
        startInt -=1;
    }
    console.log(startInt);
}