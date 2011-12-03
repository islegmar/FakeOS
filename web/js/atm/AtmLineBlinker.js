/**
 * Representa una línea del autómata de estados
 */
function AtmLineBlinker(bgBlinker) {
	this.bgBlinker = bgBlinker;
}

YAHOO.lang.extend(AtmLineBlinker, AtmLine);

AtmLineBlinker.prototype.exec = function() {
    this.bgBlinker.start();
}