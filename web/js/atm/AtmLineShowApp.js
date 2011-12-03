/**
 * Representa una línea del autómata de estados
 */
function AtmLineShowApp(idEle, texto) {
    AtmLineShowApp.superclass.constructor.call(this);
    this.idEle = idEle;
	this.texto = texto;
}

YAHOO.lang.extend(AtmLineShowApp, AtmLine);

AtmLineShowApp.prototype.exec = function() {
	
    // Obtenemos el div
    var ele = YAHOO.util.Dom.get(this.idEle);

    // Buscamos el div con el texto
    var divTexto = Util.getEleByClassName(ele, "textochat");
    
	// Limpiamos el texto
	divTexto.innerHTML = '';

    // Le ponemos el texto
	divTexto.innerHTML = this.texto;
    
    // Lo mostramos
    Util.showEle(ele);
}