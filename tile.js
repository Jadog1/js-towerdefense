var Tile = (function() {

    /**
     * Constructs a new Tile object.
     *
     * @param  {Object} data
     */
    var init = function(data) {

        this.get_icon = function() {
            return data.icon;
        };

        this.is_free = function() {
            return data.is_free;
        };

        this.set_is_free = function(is_free) {
            data.is_free = is_free;
        };
    };

    return init;
})();

/*

var data = {
    icon: ,
    is_free:
}

*/
