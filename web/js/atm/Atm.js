/**
 * Representa un Autómata de estados
 */
function Atm() {
	this.currState = 0;
	this.lines = new Array();
}

Atm.prototype.addLine = function(line) {
	this.lines.push(line);
}

/**
 * Ejecuta una acción en base al evento que recibe y modifica su estado.
 * NOTA: Por ahora lo hacemos fácil
 * @param event
 * @return
 */
Atm.prototype.exec = function(event) {
    // Voy por líneas
    if ( this.lines.length !=0 ) {
        
        // Ya no quedan líneas para ejecutar
        if ( this.currState>=this.lines.length ) return;
        
        // Obtenemos la línea a ejecutar
        var atmLine = this.lines[this.currState];
        
        // Ejecutamos la acción
        atmLine.exec();
        
        // Movemos el autómata al siguiente estado
        ++this.currState;
        
        // Si la siguiente acción es automática, la ejecuto
        if ( this.lines[this.currState] instanceof AtmLineAuto ) {
        	this.exec();
        }
    // Muestro líneas de manera secuencial     
    } else {
        ++this.currState;
        var div = YAHOO.util.Dom.get("step"+this.currState);
        if ( div!=null ) {
            Util.showEle(div);
        }
    }
}

Atm.prototype.getNextLine = function() {
    // Ya no quedan líneas para ejecutar
    if ( this.currState>=this.lines.length ) return null;
    
    // Obtenemos la línea a ejecutar
    return this.lines[this.currState];
}