/**
 * Escribimos un texto en una textarea que luego mostramos en un div 
 */
function AtmLineTypeDiv(idEle, idTa, texto) {
	AtmLineTypeDiv.superclass.constructor.call(this);
    this.idEle = idEle;
	this.texto = texto;
	// Text Área donde vamos a escribir
	this.ta = YAHOO.util.Dom.get(idTa);
}

YAHOO.lang.extend(AtmLineTypeDiv, AtmLine);

AtmLineTypeDiv.prototype.exec = function() {
	
    // Obtenemos el div
    var ele = YAHOO.util.Dom.get(this.idEle);

    // Buscamos el div con el texto
    var divTexto = Util.getEleByClassName(ele, "textochat");
    
	var typeWriter = new TypeWriter();
	typeWriter.setDiv(this.ta);
	typeWriter.setText(this.texto);
	
	// Limpiamos el texto
	divTexto.innerHTML = '';

    // Le ponemos el texto
	//divTexto.innerHTML = this.texto;
    
    // Lo mostramos
    Util.showEle(ele);
	
	// Tipeamos el texto
	typeWriter.write();	
}