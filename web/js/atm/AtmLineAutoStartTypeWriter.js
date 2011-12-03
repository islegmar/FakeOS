/**
 * Línea automática
 */
function AtmLineAutoStartTypeWriter(typeWriter) {
	AtmLineAutoStartTypeWriter.superclass.constructor.call(this);
	this.typeWriter = typeWriter;
}

YAHOO.lang.extend(AtmLineAutoStartTypeWriter, AtmLineAuto);

AtmLineAuto.prototype.exec = function() {
	this.typeWriter.setIsActivo(true);
}