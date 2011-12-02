/**
 * Línea automática
 */
function AtmLineAuto() {
	AtmLineAuto.superclass.constructor.call(this);
}

YAHOO.lang.extend(AtmLineAuto, AtmLine);

AtmLineAuto.prototype.exec = function() {
	alert("No implementada");
}