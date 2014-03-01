// TODO: Put everything related to the game as a whole here.
var GameController = (function() {

    /**
     * Constructs a new GameController object.
     */
    var init = function() {
        var lives; // TODO: Initialization (config file, constant)
        var score = 0;

        this.get_lives = function() {
            return lives;
        }

        this.get_score = function() {
            return score;
        };
    };

    return init;
}());
