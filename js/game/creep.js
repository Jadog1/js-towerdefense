// TODO: Put everything related to creeps here.
var Creep = (function() {

    /**
     * Constructs a new Creep object.
     */
    var init = function(data) {
        var coordinates = data.coordinates;
        var current_hitpoints = data.hitpoints;
        var movement = data.movement;
        var initial_hitpoints = data.hitpoints;

        this.get_coordinates = function() {
            return Point.copy(coordinates); // defensive copying
        };

        this.get_current_hitpoints = function() {
            return current_hitpoints;
        };

        this.get__initial_hitpoints = function() {
            return initial_hitpoints;
        };
    };

    return init;
})();
