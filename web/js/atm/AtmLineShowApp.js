/**
 * Representa una línea del autómata de estados
 */
function AtmLineShowApp(app) {
    AtmLineShowApp.superclass.constructor.call(this);
    this.app = app;
}

YAHOO.lang.extend(AtmLineShowApp, AtmLineAuto);

// --------------------------------------------------------------------- AtmLine
AtmLineShowApp.prototype.exec = function() {
	this.app.show();
}