var $bird;
var $gameContainer;
var height;
 /* Get variables ready and make a bird. */
$(document).ready(function() {
    $bird = $("<img class='bird' id='bird' src='img/horizontalBird.gif'>");
    $gameContainer = $('#gameContainer');
    $gameContainer.append($bird);
    height = parseInt($bird.css('top'), 10);  // 50vh Use $bird.css(top) instead to get height dynamically
});


/* Control bird movement relative to gameContainer */

function moveUp() { //Uses increments of 20 px, can change without consequences for faster bird move.
    if (height - 20 < $gameContainer.offset().top){  //check if bird is at top of screen.
        height = $gameContainer.offset().top;        //If so, set height = top of game container.
    } else {
        height -= 20;                                //Else move bird up.
    }

    $bird.css('top', height + "px");
}

function moveDown() {
    if (height + 20 > $gameContainer.offset().top + $gameContainer.outerHeight() - parseInt($gameContainer.css('border-bottom-width')) - parseInt($bird.css('height'))) { //Need to add bird dimensions here to check if bird's bottom is at bottom. Include border check. 
        height = $gameContainer.offset().top + $gameContainer.outerHeight() - parseInt($gameContainer.css('border-bottom-width')) - parseInt($bird.css('height'));        //Set bird bottom to bottom of gameContainer.
    } else {
        height += 20; //Else move bird down.
    }

    $bird.css('top', height + "px"); // Actually set bottom here.
}

$(document).keydown(function(e) {
    switch(e.keyCode) {
        case 38: // up
            moveUp();
            break;

        case 40: // down
            moveDown();
            break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
