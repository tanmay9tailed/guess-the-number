let rand=Math.floor(Math.random()*100)+1;
console.log(rand);

let count=1;

let guess=parseInt(prompt("GUESS A NUMBER BETWEEN 1 AND 100"));
 
while(!guess){
    guess=parseInt(prompt("ENTER A VALID NUMBER:"));
}

while(guess!==rand){
    if(guess<rand){
    guess=parseInt(prompt("LOW!!! TRY AGAIN:"));
    ++count;
    }
    else{
        guess=parseInt(prompt("HIGH!!! TRY AGAIN:"));
        ++count
    }
}
alert(`YOU GOT IT CORRECT IN ${count} ATTEMPTS.`);