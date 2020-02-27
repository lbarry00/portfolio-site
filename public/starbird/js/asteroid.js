/* Init gameover screen as hidden and set jquery for gameContainer */

var $gameContainer;

(function () {
    $("#gameover").hide();
    $gameContainer = $("#gameContainer");
})();

function getRandomPosition() {
    // Height is in vh--- Using px to play nice with the window dimensions.
    let min = $gameContainer.offset().top;
    let max = $gameContainer.offset().top + $gameContainer.outerHeight() - parseInt($gameContainer.css('border-bottom-width'));
    var position = Math.floor(Math.random() * (max-min) + min);
    return position;
}

function getRandomSpeed() {
    // Generate a random speed between 3-8 seconds
    var speed = Math.floor(Math.random() * (8 - 3) + 3);
    return speed;
}

function getRandomSize() {
    //Generate a random size between 0.8 and 3.0
    var size = Math.floor(Math.random() * (250 - 30) + 30);
    return size;
}

var asteroidIncrement = 1;
var gameRunning = true;
setInterval(function() {
    if (gameRunning) {
        var randomAsteroidType = Math.floor(Math.random() * 2);
        var isAsteroidOne;
        if (randomAsteroidType % 2 == 0) {
            isAsteroidOne = true;
        } else {
            isAsteroidOne = false;
        }

        let $asteroid;
        if (isAsteroidOne) {
            $asteroid = $("<img src='img/asteroid1.png' />");
        } else {
            $asteroid = $("<img src='img/asteroid2.png' />");
        }
        $asteroid.addClass("asteroid");
        let id = "asteroid" + asteroidIncrement;
        $asteroid.attr("id", id);

        let size = getRandomSize();
        let position = getRandomPosition();
        let speed = getRandomSpeed();


        $asteroid.css("width", size + "px"); /* What size, set height and width equal to preserve aspect ratio. KEEP THIS AN INTEGER!!! */
        $asteroid.css("height", size + "px");
        $asteroid.css("animation-duration", speed + "s"); /* How fast */
        if (position + parseInt($asteroid.css('height')) > $gameContainer.offset().top + $gameContainer.outerHeight() - parseInt($gameContainer.css('border-bottom-width'))) {   //Check if asteroid is too big for current position set.
            position = $gameContainer.offset().top + $gameContainer.outerHeight() - parseInt($gameContainer.css('border-bottom-width')) - parseInt($asteroid.css('height'));     //If so, set position to fit the meteor in the game.
        } 
        
        $asteroid.css("top", position + "px"); /* What position on the y-axis */ 


        $gameContainer.append($asteroid); //Make the asteroid.

        setTimeout(function() {
            $("#" + id).remove();
        }, speed*1000);

        asteroidIncrement++; // For keeping track of which asteroid to remove
    }
}, 2000);

setInterval(function() {
    var collisionList = $("#bird").collision(".asteroid");

    if (collisionList.length > 0) {
        $(".asteroid").remove();
        $("#bird").remove();

        gameRunning = false;
        $("#gameover").show(); //Unhide gameover.
    }
}, 25);
