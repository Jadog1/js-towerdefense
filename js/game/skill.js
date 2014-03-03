// TODO: Put everything related to skills here.
var Skill = (function() {

    /**
     * Constructs a new Skill object.
     */
    var init = function(data) {

        /**
         * The time until the skill can be used again.
         *
         * @type {Number}
         */
        var current_cooldown = 0;

        this.get_cooldown = function() {
            return data.cooldown;
        }

        this.get_current_cooldown = function() {
            return current_cooldown;
        }

        this.get_number_of_targets = function() {
            return data.number_of_targets;
        }

        this.get_range = function() {
            return data.range;
        }

        /**
         * Uses the skill if it is off cooldown. Otherwise the current cooldown
         * is decremented.
         *
         * @param  {Creep[]} creeps
         * A list of the creeps that are currently on the map.
         *
         * @param  {Tower[]} towers
         * A list of the towers that are placed on the map.
         */
        this.use = function(creeps, towers) {
            if (current_cooldown === 0) {
                data.use(creeps, towers);
                current_cooldown = data.cooldown;
            } else {
                current_cooldown--;
            }
        }
    };

    return init;
})();

/*

var data = {
    range: ,
    cooldown: ,
    number_of_targets: ,
    use:
}

*/
