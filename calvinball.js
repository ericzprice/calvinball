<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Calvinball</title>
</head>
<body>
    <script>
        /*
            Calvinball (http://www.picpak.net/calvin/oldsite/images/oogy.gif) is a game with a very complicated scoring system. Your job is to write a piece of code which determines the winner of a game.

            Provided below are three different player's scores. Uncomment one at a time to calculate the score for that player.

            Calvinball Rules:
                1. A player's score is equal to 500 if their score is not already a number. (this is implemented below).
                2. A player's score is reduced by 300 if they are crying. Otherwise it is increased by 50.
                3. A player's score is reduced by 77 if their last play was "Q"
                4. A player gets an extra 395 points if they are in a tree, unless their last play was a number.
                5. A player's score is doubled if they are holding the broom handle, but it is tripled if they have the broom brush. Otherwise the player's score is halved.
                6. A player's score is multiplied by 1.5 if they are carrying the ball but only if they are not in a tree. Disregard this rule if the player is crying.
                7. If the player's last play was a number (not a letter), the player's score is multiplied by that amount.
        */


        //Player One
        //Instantiate a variable called playerOne
        // var score = 193;
        // var last_play = "Q";
        // var broom = "handle";
        // var has_ball = false;
        // var is_in_tree = false;
        // var crying = false;



        //Player Two
        // var score = 394;
        // var last_play = "W";
        // var broom = "none";
        // var has_ball = true;
        // var is_in_tree = true;
        // var crying = false;



        //Player Three
        var score = "f";
        var last_play = 1.5;
        var broom = "brush";
        var has_ball = true;
        var is_in_tree = false;
        var crying = true;


        console.log(score);

        //1. A player's score is equal to 500 if their score is not already a number. (this is implemented below).
        if (typeof(score) != "number") {
            score = 500;
        }
        // 2. A player's score is reduced by 300 if they are crying. Otherwise it is increased by 50.

        if (crying === true) {
            score = score - 300;
            console.log(score);
        } else {
            score += 50;
            console.log(score);
        }
        //3. A player's score is reduced by 77 if their last play was "Q"
        if (last_play === "Q") {
            score = score - 77;
            console.log(score);
        }
        // 4. A player gets an extra 395 points if they are in a tree, unless their last play was a number.
        if (last_play != typeof("number")) {
            if (is_in_tree === true) {
                score = score + 395;
                console.log(score);
            }
        }
        //5. A player's score is doubled if they are holding the broom handle, but it is tripled if they have the broom brush. Otherwise the player's score is halved.
        if (broom === "handle") {
            score = score * 2;
        }
        else if (broom === "brush") {
            score = score * 3;
        }
        else {
            score = score / 2;
        }

        //6.  FUNCTION-A player's score is multiplied by 1.5 3-IF they are carrying the ball but only 2-IF they are not in a tree. Disregard this rule 3-IF the player is crying.
        if (crying === false) {
            if (is_in_tree === false) {
                if (has_ball === true) {
                    score = score * 1.5;
                }
            }
        }

        // 7. 1-IF the player's last play was a number (not a letter), the player's 2- FUNCTION score is multiplied by that amount.
        console.log(last_play.valueOf());
        if (typeof(last_play) === "number") {
            score = score * last_play.valueOf();
        }

        console.log(score);

    </script>
</body>
</html>
