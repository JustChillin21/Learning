// Check if the user is ready to play!
if(confirm("Would you like to play a game?")){
    console.log("Proceeding");
    var age = prompt("What's your age");
    if (age>13)
    {
        console.log("Age verification checks. Proceeding");
        //Story//
        console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
        //Part One
        console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");
        var userAnswer=prompt("Do you want to race Bieber on stage?");
        if (userAnswer==="yes")
            {
                console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
            }
            else
            {
                console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
            }
            var feedback=prompt("Thanks for Playing, please rate the game from 1 to 10");
                if(feedback>8)
                {
                    console.log("Thank you! We should race at the next concert!");
                }
                else
                {
                    console.log("I'll keep practicing coding and racing.");
                }

    }
    else
    {
        console.log("Sorry, too young. Please come back when old enough!");
    }
}else{
    console.log("Okay, Maybe next time");
}
