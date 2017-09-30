var uiWidgets = uiWidgets || {};

/**
 * Frame that places new child nodes directly under the previous child.
 * @constructor
 * @param {Object} game - Current game instance.
 * @param {Object} context - The context this object is called in.
 */
uiWidgets.Column = function (game, x, y, bg) {
    "use strict";
    uiWidgets.Frame.apply(this, arguments);
};

uiWidgets.Column.prototype = Object.create(uiWidgets.Frame.prototype);
uiWidgets.Column.constructor = uiWidgets.Column;

/** Adds a new object into the Column, then aligns it under the previous object.
 * @param {Object} node - The sprite to add to the Column.
 * @param {Number} alignment - The alignment relative to the previous child.
 */
uiWidgets.Column.prototype.addNode = function (node, alignment) {
    "use strict";
    alignment = alignment || Phaser.BOTTOM_CENTER;

    this.add(node);
    var previousNode = this.children[this.children.length - 2];

    if (previousNode !== undefined) {
        node.alignTo(previousNode, alignment);
    }

    // Reset the positions for the bar's draggable area.
    if ("enableBarDrag" in node) {
        node.enableBarDrag();
    }

};