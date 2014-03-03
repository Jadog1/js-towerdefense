var Point = (function() {

    /**
     * Constructs a new point in a two dimensional plane. The origin is in the
     * top left corner, the x-axis is pointing to the right, the y-axis is
     * pointing down.
     *
     * @param {Integer} x
     * The x-coordinate of the point.
     *
     * @param {Integer} y
     * The y-coordinate of the point.
     */
    var init = function(x, y) {
        this.x = x;
        this.y = y;
    };

    /**
     * Creates a copy of the provided Point object. The new point has the same
     * coordinates as the old point. More formally the following relations hold:
     * <ul>
     *     <li>new_point.x === old_point.x</li>
     *     <li>new_point.y === old_point.y</li>
     *     <li>new_point != old_point</li>
     * </ul>
     *
     * @param {Point} point
     * The point to be copied.
     *
     * @return {Point}
     * A copy of the provided point.
     */
    init.copy = function(point) {
        return new Point(point.x, point.y);
    };

    /**
     * @return {Double}
     * The euclidean distance between the two points.
     */
    init.distance = function(p1, p2) {
        Math.sqrt(Math.pow((p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    };

    return init;
})();
