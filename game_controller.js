// TODO: Put everything related to the game as a whole here.
var GameController = (function() {

    /**
     * Constructs a new GameController object.
     */
    var init = function() {
        var score = 0;

        this.get_score = function() {
            return score;
        };
    };

    return init;
}());
